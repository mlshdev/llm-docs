> Pinned source for Trigger.dev v4.8.5: [docs/oidc/custom.mdx](https://github.com/triggerdotdev/trigger.dev/blob/d412e08a8ab97131816c18a5cdb39bb74ced0eb0/docs/oidc/custom.mdx)
> Canonical documentation: https://trigger.dev/docs/oidc/custom

# Custom OIDC integrations

Connect tasks to services without an official Trigger.dev OIDC integration.

Use `auth.getOIDCToken()` with a service that accepts external OIDC identities for workload authentication. You configure trust in that service and implement its authentication flow.

Support for OIDC user login does not necessarily mean a service accepts workload identities. Check the service's federation documentation before starting.

## Configure trust

Follow the [OIDC prerequisites](https://trigger.dev/docs/oidc#prerequisites), then go to the [OIDC](https://cloud.trigger.dev/_/oidc) page for your environment and copy the issuer URL and subject.

In the receiving service:

1. Register your organization's issuer, `https://oidc.trigger.dev/YOUR_ORG_SLUG`, using its [discovery endpoint](https://trigger.dev/docs/oidc#how-tokens-work) or signing keys as required.
2. Configure the expected audience. Use the service's required value, or choose one if it allows you to.
3. Restrict access to the exact environment subject, directly or through the service's identity-mapping rules.
4. Grant the identity only the permissions your task needs.

The service must verify the signature, issuer, audience, and expiry, and enforce the subject restriction. Trusting the issuer and audience alone does not isolate access to one environment.

## Request a token

Request a token inside your task with the exact audience configured in the receiving service:

```typescript
import { auth, task } from "@trigger.dev/sdk";

export const federatedTask = task({
  id: "federated-task",
  run: async () => {
    const { token } = await auth.getOIDCToken({
      audience: "https://service.example.com",
    });

    // Use the service's documented token exchange or authentication flow here.
    // Never log or return the token.
  },
});
```

`auth.getOIDCToken({ audience })` returns `Promise<{ token: string; expiresAt: Date }>`.

Most services exchange the token for service-specific credentials. Follow their documentation for the endpoint, request format, and credential refresh behavior. Send the OIDC token directly as a bearer token only if the service explicitly supports that flow.

Keep tokens and credentials within the executing run and refresh before expiry. Redeploy with the updated CLI and SDK, then start a new run. For local Development runs, use the service's own development credentials instead.
