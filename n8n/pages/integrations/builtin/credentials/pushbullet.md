> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/pushbullet.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/credentials/pushbullet.md)

# Pushbullet credentials <a id="pushbullet-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Pushbullet](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.pushbullet)

## Prerequisites <a id="prerequisites"></a>

Create a [Pushbullet](https://www.pushbullet.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Pushbullet's API documentation](https://docs.pushbullet.com/) for more information about the service.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need:

- A **Client ID**: Generated when you create a Pushbullet app, also known as an OAuth client.
- A **Client Secret**: Generated when you create a Pushbullet app, also known as an OAuth client.

To generate the **Client ID** and **Client Secret**, go to the [create client](https://www.pushbullet.com/create-client) page. Copy the **OAuth Redirect URL** from n8n and add this as your **redirect\_uri** for the app/client. Use the **client\_id** and **client\_secret** from the OAuth Client in your n8n credential.

Refer to Pushbullet's [OAuth2 Guide](https://docs.pushbullet.com/#oauth2) for more information.

> **Info**
> **Pushbullet OAuth test link**
>
> Pushbullet offers a test link during the client creation process described above. This link isn't compatible with n8n. To verify the authentication works, use the **Connect my account** button in n8n.
