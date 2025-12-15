import type { APIRoute } from 'astro';

// 1. Tell Astro this route is dynamic and runs on the server (Cloudflare)
export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  const key = params.key;

  if (!key) {
    return new Response("Image key not provided", { status: 404 });
  }

  try {
    // 2. Access the bucket via the binding
    // We cast 'locals' to 'any' to stop TypeScript complaining about 'runtime'
    const bucket = (locals as any).runtime.env.MEDIA_BUCKET;
    
    const object = await bucket.get(key);

    if (!object) {
      return new Response("Image not found in R2", { status: 404 });
    }

    // 3. Cast the object to 'any' to safely access the '.body' property
    const r2Object = object as any;

    // Safety check to ensure we actually got file content
    if (!r2Object.body) {
      return new Response("File has no body", { status: 404 });
    }

    // 4. Set up the response headers (Metadata, ETag, Cache)
    const headers = new Headers();
    object.writeHttpMetadata(headers as any); // Cast headers to satisfy strict types
    headers.set('etag', object.httpEtag);
    headers.set('Cache-Control', 'public, max-age=31536000');

    // 5. Return the image stream
    return new Response(r2Object.body, {
      headers,
    });

  } catch (e) {
    console.error(e);
    return new Response("Error fetching image", { status: 500 });
  }
};