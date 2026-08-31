> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.awssqs.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.awssqs.md)

# AWS SQS node <a id="aws-sqs-node"></a>

Use the AWS SQS node to automate work in AWS SNS, and integrate AWS SQS with other applications. n8n has built-in support for a wide range of AWS SQS features, including sending messages.

On this page, you'll find a list of operations the AWS SQS node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to  [AWS SQS credentials](https://docs.n8n.io/integrations/builtin/credentials/aws) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Send a message to a queue.

## Templates and examples <a id="templates-and-examples"></a>

[Browse AWS SQS node documentation integration templates](https://n8n.io/integrations/aws-sqs) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
