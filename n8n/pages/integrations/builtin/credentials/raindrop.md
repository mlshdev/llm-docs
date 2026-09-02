> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/raindrop.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/raindrop.md)

# Raindrop credentials <a id="raindrop-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Raindrop](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.raindrop)

## Prerequisites <a id="prerequisites"></a>

Create a [Raindrop](https://raindrop.io/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Raindrop's API documentation](https://developer.raindrop.io/) for more information about the service.

## Using OAuth <a id="using-oauth"></a>

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

Generate both by creating a Raindrop app.

To create an app, go to **Settings >** [**Integrations**](https://app.raindrop.io/settings/integrations) and select **+ Create new app** in the **For Developers** section.

Use these settings for your app:

- Copy the **OAuth Redirect URL** from n8n and add it as a **Redirect URI** in your app.
- Copy the **Client ID** and **Client Secret** from the Raindrop app and enter them in your n8n credential.
