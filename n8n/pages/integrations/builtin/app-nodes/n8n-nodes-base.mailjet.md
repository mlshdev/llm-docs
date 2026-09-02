> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.mailjet.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.mailjet.md)

# Mailjet node <a id="mailjet-node"></a>

Use the Mailjet node to automate work in Mailjet, and integrate Mailjet with other applications. n8n has built-in support for a wide range of Mailjet features, including sending emails, and SMS.

On this page, you'll find a list of operations the Mailjet node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Mailjet credentials](https://docs.n8n.io/integrations/builtin/credentials/mailjet) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Email
  - Send an email
  - Send an email template
- SMS
  - Send an SMS

## Templates and examples <a id="templates-and-examples"></a>

[Browse Mailjet node documentation integration templates](https://n8n.io/integrations/mailjet) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
