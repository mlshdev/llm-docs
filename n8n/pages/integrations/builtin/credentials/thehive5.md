> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/thehive5.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/credentials/thehive5.md)

# TheHive 5 credentials <a id="thehive-5-credentials"></a>

You can use these credentials to authenticate the following nodes with TheHive 5.

- [TheHive 5](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehive5)

> **Info**
> **TheHive and TheHive 5**
>
> n8n provides two nodes for TheHive. Use these credentials with TheHive 5 node. If you're using TheHive node for TheHive 3 or TheHive 4, use [TheHive credentials](https://docs.n8n.io/integrations/builtin/credentials/thehive).

## Prerequisites <a id="prerequisites"></a>

Install [TheHive 5](https://docs.strangebee.com/thehive/download/) on your server.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [TheHive's API documentation](https://docs.strangebee.com/thehive/api-docs/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Users with `orgAdmin` and `superAdmin` accounts can generate API keys:
  - `orgAdmin` account: Go to **Organization > Create API Key** for the user you wish to generate a key for.
  - `superAdmin` account: Go to **Users > Create API Key** for the user you wish to generate a key for.
  - Refer to [API Authentication](https://docs.strangebee.com/cortex/api/api-guide/?h=api+key#authentication) for more information.
- A **URL**: The URL of your TheHive server.
- **Ignore SSL Issues**: When turned on, n8n will connect even if SSL certificate validation fails.
