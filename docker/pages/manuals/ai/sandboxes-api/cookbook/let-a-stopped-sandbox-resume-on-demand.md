> Pinned source for Docker main: [content/manuals/ai/sandboxes-api/cookbook/let-a-stopped-sandbox-resume-on-demand.md](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/content/manuals/ai/sandboxes-api/cookbook/let-a-stopped-sandbox-resume-on-demand.md)

# Let a stopped sandbox resume on demand

Let a request to a published application start a stopped sandbox. This can suit an application that should be available on demand without remaining active between uses.

Use an [authenticated client](https://docs.docker.com/ai/sandboxes-api/cookbook/connect-to-cloud-with-a-bearer-token/) and a managed image that starts the application. [Publish its port](https://docs.docker.com/ai/sandboxes-api/cookbook/expose-a-port-from-a-cloud-sandbox/) before relying on requests to reach it.

## Configure resume on creation {#1-configure-resume-on-creation}

Set automatic resume in the sandbox's lifecycle options. Omit the value when you want the service default; explicitly set false to disable it.

The example waits for the initial startup. Automatic resume does not recover a deleted sandbox, and it does not replace application startup configuration.

**TypeScript**

```typescript
const sandbox = await client.create(
  { displayName: name, image, lifecycle: { autoResume } },
  { timeoutMs: 300_000, idempotencyKey: requestId },
);
return sandbox.waitUntilRunning();
```

<details>
<summary>Complete TypeScript example: wake/configure.ts</summary>

```typescript
import type { Sandboxes } from '@docker/sandboxes';

export async function createWithAutoResume(
  client: Sandboxes,
  name: string,
  image: string,
  autoResume: boolean | undefined,
  requestId: string,
) {
  const sandbox = await client.create(
    { displayName: name, image, lifecycle: { autoResume } },
    { timeoutMs: 300_000, idempotencyKey: requestId },
  );
  return sandbox.waitUntilRunning();
}
```

</details>

## Read the effective setting {#2-read-the-effective-setting}

Get the sandbox and inspect the effective automatic-resume value together with its state. This checks what the service recorded; it does not send a request to the application or prove that the application can start.

To verify the whole flow, stop the sandbox, request its published application URL, and confirm that the application becomes ready. Allow for startup time and keep the application's own authentication enabled.

**TypeScript**

```typescript
const sandbox = await client.get(name);
return {
  autoResume: sandbox.effectiveFeatures?.timeouts?.autoResume ?? false,
  status: sandbox.status,
};
```

<details>
<summary>Complete TypeScript example: wake/verify.ts</summary>

```typescript
import type { Sandboxes } from '@docker/sandboxes';

export async function autoResumeInForce(client: Sandboxes, name: string) {
  const sandbox = await client.get(name);
  return {
    autoResume: sandbox.effectiveFeatures?.timeouts?.autoResume ?? false,
    status: sandbox.status,
  };
}
```

</details>
