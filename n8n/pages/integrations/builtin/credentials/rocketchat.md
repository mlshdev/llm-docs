> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/rocketchat.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/credentials/rocketchat.md)

# Rocket.Chat credentials <a id="rocketchat-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Rocket.Chat](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rocketchat)

## Prerequisites <a id="prerequisites"></a>

- Create a [Rocket.Chat](https://rocket.chat/) account.
- Your account must have the `create-personal-access-tokens` permission to generate personal access tokens.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API access token

## Related resources <a id="related-resources"></a>

Refer to [Rocket.Chat's API documentation](https://developer.rocket.chat/reference/api/rest-api) for more information about the service.

## Using API access token <a id="using-api-access-token"></a>

To configure this credential, you'll need:

- Your **User ID**: Displayed when you generate an access token.
- An **Auth Key**: Your personal access token. To generate an access token, go to your **avatar > Account > Personal Access Tokens**. Copy the token and add it as the n8n **Auth Key**.
- Your Rocket.Chat **Domain**: Also known as your default URL or workspace URL.

Refer to [Personal Access Tokens](https://docs.rocket.chat/docs/manage-your-account-settings#personal-access-tokens) for more information.
