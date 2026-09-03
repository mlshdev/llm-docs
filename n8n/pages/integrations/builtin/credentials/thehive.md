> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/thehive.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/credentials/thehive.md)

# TheHive credentials <a id="thehive-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [TheHive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehive)

> **Info**
> **TheHive and TheHive 5**
>
> n8n provides two nodes for TheHive. Use these credentials with TheHive node for TheHive 3 or TheHive 4. If you're using TheHive5 node, use [TheHive 5 credentials](https://docs.n8n.io/integrations/builtin/credentials/thehive5).

## Prerequisites <a id="prerequisites"></a>

Install [TheHive](https://docs.strangebee.com/thehive/installation/installation-methods/) on your server.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [TheHive 3's API documentation](https://docs.thehive-project.org/thehive/legacy/thehive3/api/) and [TheHive 4's API documentation](https://docs.thehive-project.org/thehive/) for more information about the services.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Create an API key from **Organization > Create API Key**. Refer to [API Authentication](https://docs.thehive-project.org/thehive/legacy/thehive3/api/authentication/) for more information.
- Your **URL**: The URL of your TheHive server.
- An **API Version**: Choose between:
  - **TheHive 3 (api v0)**
  - **TheHive 4 (api v1)**
  - For TheHive 5, use [TheHive 5 credentials](https://docs.n8n.io/integrations/builtin/credentials/thehive5) instead.
- **Ignore SSL Issues**: When turned on, n8n will connect even if SSL certificate validation fails.
