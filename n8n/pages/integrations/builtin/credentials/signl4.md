> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/signl4.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/credentials/signl4.md)

# SIGNL4 credentials <a id="signl4-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [SIGNL4](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.signl4)

## Prerequisites <a id="prerequisites"></a>

Create a [SIGNL4](https://www.signl4.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Webhook secret

## Related resources <a id="related-resources"></a>

Refer to [SIGNL4's Inbound Webhook documentation](https://connect.signl4.com/webhook/docs/index.html) for more information about the service.

## Using webhook secret <a id="using-webhook-secret"></a>

To configure this credential, you'll need:

- A **Team Secret**: SIGNL4 includes this secret in the "✅ Sign up complete" email as the last part of the webhook URL. If your webhook URL is `https://connect.signl4.com/webhook/helloworld`, your team secret would be `helloworld`.
