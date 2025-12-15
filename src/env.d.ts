/// <reference path="../.astro/types.d.ts" />

type R2Bucket = import("@cloudflare/workers-types").R2Bucket;

declare namespace App {
  interface Locals extends Runtime {
    runtime: {
      env: {
        MEDIA_BUCKET: R2Bucket;
      };
    };
  }
}