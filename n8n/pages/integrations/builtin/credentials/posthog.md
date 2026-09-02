> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/posthog.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/posthog.md)

# PostHog credentials <a id="posthog-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [PostHog](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.posthog)

## Prerequisites <a id="prerequisites"></a>

Create a [PostHog](https://posthog.com/) account or host PostHog on your server.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [PostHog's API documentation](https://posthog.com/docs/api) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- The API **URL**: Enter the correct domain for your API requests:
  - On US Cloud, use `https://us.i.posthog.com` for public POST-only endpoints or `https://us.posthog.com` for private endpoints.
  - On EU Cloud, use `https://eu.i.posthog.com` for public POST-only endpoints or `https://eu.posthog.com` for private endpoints.
  - For self-hosted instances, use your self-hosted domain.
  - Confirm yours by checking your PostHog instance URL.
- An **API Key**: The API key you use depends on whether you're accessing public or private endpoints:
  - For public POST-only endpoints, use a [Project API key](https://app.posthog.com/project/settings) from your project's **General** Settings.
  - For private endpoints, use a [Personal API key](https://app.posthog.com/settings/user-api-keys) from your User account's **Personal API Keys** Settings. Refer to [How to obtain a personal API key](https://posthog.com/docs/api#private-endpoint-authentication) for more information.
