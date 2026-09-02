> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.awscomprehend.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/integrations/builtin/app-nodes/n8n-nodes-base.awscomprehend.md)

# AWS Comprehend node <a id="aws-comprehend-node"></a>

Use the AWS Comprehend node to automate work in AWS Comprehend, and integrate AWS Comprehend with other applications. n8n has built-in support for a wide range of AWS Comprehend features, including identifying and analyzing texts.

On this page, you'll find a list of operations the AWS Comprehend node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [AWS Comprehend credentials](https://docs.n8n.io/integrations/builtin/credentials/aws) for guidance on setting up authentication.

## Operations <a id="operations"></a>

**Text**

- Identify the dominant language
- Analyse the sentiment of the text

## Templates and examples <a id="templates-and-examples"></a>

[Browse AWS Comprehend node documentation integration templates](https://n8n.io/integrations/aws-comprehend) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
