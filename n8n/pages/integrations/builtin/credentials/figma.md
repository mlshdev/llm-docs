> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/figma.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/credentials/figma.md)

# Figma credentials <a id="figma-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Figma Trigger (Beta)](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [Figma](https://www.figma.com/) account. You need an admin or owner level account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Access token
- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Figma's API documentation](https://www.figma.com/developers/api) for more information about the service.

## Using Access token <a id="using-access-token"></a>

To configure this credential, you'll need:

- A Personal **Access Token** (PAT): Refer to the [Figma API Access Tokens documentation](https://www.figma.com/developers/api#access-tokens) for instructions on generating a Personal **Access Token**.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need a [Figma](https://www.figma.com/) account.

> **Info**
> **Note for n8n Cloud users**
>
> Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](https://docs.n8n.io/deploy/host-n8n) n8n, you'll need to register an application to set up OAuth:

1. Open the Figma [developer apps](https://www.figma.com/developers/apps) page.
2. Select **Create a new app**.
3. Enter a **Name** for your app, like `n8n integration`.
4. In n8n, copy the **OAuth Redirect URL**.
5. In Figma, select **Add a callback** and enter the URL you copied from n8n.
6. Save the app.
7. Copy the **Client ID** from Figma and enter it in your n8n credential.
8. Copy the **Client Secret** from Figma and enter it in your n8n credential.

Refer to the [Figma OAuth documentation](https://www.figma.com/developers/api#oauth2) for more information.

## Setting custom scopes <a id="setting-custom-scopes"></a>

Figma OAuth2 credentials use the following scopes by default:

- `webhooks:read`
- `webhooks:write`

To select different scopes for your credentials, enable the **Custom Scopes** slider and edit the **Enabled Scopes** list. Keep in mind that some features may not work as expected with more restrictive scopes. Refer to [Figma's OAuth scopes](https://developers.figma.com/docs/rest-api/scopes/) for the full list of available scopes.
