> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.twilio.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.twilio.md)

# Twilio node <a id="twilio-node"></a>

Use the Twilio node to automate work in Twilio, and integrate Twilio with other applications. n8n supports sending MMS/SMS and WhatsApp messages with Twilio.

On this page, you'll find a list of operations the Twilio node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Twilio credentials](https://docs.n8n.io/integrations/builtin/credentials/twilio) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- SMS
  - Send SMS/MMS/WhatsApp message
- Call
  - Make a phone call using text-to-speech to say a message

## Templates and examples <a id="templates-and-examples"></a>

[Browse Twilio node documentation integration templates](https://n8n.io/integrations/twilio) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Twilio's documentation](https://www.twilio.com/docs/usage/api) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
