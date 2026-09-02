> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.awsrekognition.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/app-nodes/n8n-nodes-base.awsrekognition.md)

# AWS Rekognition node <a id="aws-rekognition-node"></a>

Use the AWS Rekognition node to automate work in AWS Rekognition, and integrate AWS Rekognition with other applications. n8n has built-in support for a wide range of AWS Rekognition features, including analyzing images.

On this page, you'll find a list of operations the AWS Rekognition node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [AWS Rekognition credentials](https://docs.n8n.io/integrations/builtin/credentials/aws) for guidance on setting up authentication.

## Operations <a id="operations"></a>

**Image**

- Analyze

## Templates and examples <a id="templates-and-examples"></a>

[Browse AWS Rekognition node documentation integration templates](https://n8n.io/integrations/aws-rekognition) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
