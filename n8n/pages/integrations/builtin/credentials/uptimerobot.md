> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/uptimerobot.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/credentials/uptimerobot.md)

# UptimeRobot credentials <a id="uptimerobot-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [UptimeRobot](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uptimerobot)

## Prerequisites <a id="prerequisites"></a>

Create an [UptimeRobot](https://uptimerobot.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [UptimeRobot's API documentation](https://uptimerobot.com/api/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **API Key**: Get your API Key from **My Settings > API Settings**. Create a **Main API Key** and enter this key in your n8n credential.

### API key types <a id="api-key-types"></a>

UptimeRobot supports three API key types:

- **Account-specific** (also known as **main**): Pulls data for multiple monitors.
- **Monitor-specific**: Pulls data for a single monitor.
- **Read-only**: Only runs `GET` API calls.

To complete all of the operations in the UptimeRobot node, use the **Main** or **Account-specific** API key type. Refer to [API authentication](https://uptimerobot.com/api/#auth) for more information.
