> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/sentryio.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/sentryio.md)

# Sentry.io credentials <a id="sentryio-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Sentry.io](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.sentryio)

## Prerequisites <a id="prerequisites"></a>

Create a [Sentry.io](https://sentry.io/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API token
- OAuth2
- Server API token: Use for [self-hosted Sentry](https://develop.sentry.dev/self-hosted/).

## Related resources <a id="related-resources"></a>

Refer to [Sentry.io's API documentation](https://docs.sentry.io/api/) for more information about the service.

## Using API token <a id="using-api-token"></a>

To configure this credential, you'll need:

- An API **Token**: Generate a [**User Auth Token**](https://sentry.io/settings/account/api/auth-tokens/) in **Account > Settings > User Auth Tokens**. Refer to [User Auth Tokens](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens) for more information.

## Using OAuth <a id="using-oauth"></a>

> **Info**
> **Note for n8n Cloud users**
>
> Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch, [create an integration](https://docs.sentry.io/organization/integrations/integration-platform/#creating-an-integration) with these settings:

- Copy the n8n **OAuth Callback URL** and add it as an **Authorized Redirect URI**.
- Copy the **Client ID** and **Client Secret** and add them to your n8n credential.

Refer to [Public integrations](https://docs.sentry.io/organization/integrations/integration-platform/public-integration/) for more information on creating the integration.

## Using Server API token <a id="using-server-api-token"></a>

To configure this credential, you'll need:

- An API **Token**: Generate a [**User Auth Token**](https://sentry.io/settings/account/api/auth-tokens/) in **Account > Settings > User Auth Tokens**. Refer to [User Auth Tokens](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens) for more information.
- The **URL** of your self-hosted Sentry instance.
