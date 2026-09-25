> Pinned source for Docker main: [content/manuals/ai/sandboxes-api/cookbook/get-image-pull-urls.md](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/content/manuals/ai/sandboxes-api/cookbook/get-image-pull-urls.md)

# Get image pull URLs

Obtain the registry references needed to pull a managed image with an OCI-compatible tool. This is useful when another part of your workflow needs the image content outside a sandbox.

You need an [authenticated client](https://docs.docker.com/ai/sandboxes-api/cookbook/connect-to-cloud-with-a-bearer-token/) and the image name returned by [image registration](https://docs.docker.com/ai/sandboxes-api/cookbook/register-and-manage-an-image/).

## Get the pull information {#1-get-the-pull-information}

Read the image's pull specification. The result identifies its manifest digest and image references.

Pass those references to your OCI client. This example only retrieves the pull information; it does not download layers or authenticate a separate registry client. Treat any returned access information as sensitive, and do not publish it in logs.

**TypeScript**

```typescript
const image = await client.images.get(name);
return image.getPullSpec();
```

<details>
<summary>Complete TypeScript example: pullspec/spec.ts</summary>

```typescript
import type { Sandboxes } from '@docker/sandboxes';

export async function getImagePullSpec(client: Sandboxes, name: string) {
  const image = await client.images.get(name);
  return image.getPullSpec();
}
```

</details>
