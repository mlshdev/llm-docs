> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/gotify.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/credentials/gotify.md)

# Gotify credentials <a id="gotify-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Gotify](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gotify)

## Prerequisites <a id="prerequisites"></a>

Install [Gotify](https://gotify.net/docs/install) on your server.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API token

## Related resources <a id="related-resources"></a>

Refer to [Gotify's API documentation](https://gotify.net/api-docs) for more information about the service.

## Using API token <a id="using-api-token"></a>

To configure this credential, you'll need:

- An **App API Token**: Only required if you'll use this credential to create messages. To generate an App API token, create an application from the **Apps** menu. Refer to [Gotify's Push messages documentation](https://gotify.net/docs/pushmsg) for more information.
- A **Client API Token**: Required for all actions other than creating messages (such as deleting or retrieving messages). To generate a Client API token, create a client from the **Clients** menu.
- The **URL** of the Gotify host
