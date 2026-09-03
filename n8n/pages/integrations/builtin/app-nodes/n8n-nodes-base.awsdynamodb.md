> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb.md)

# AWS DynamoDB node <a id="aws-dynamodb-node"></a>

Use the AWS DynamoDB node to automate work in AWS DynamoDB, and integrate AWS DynamoDB with other applications. n8n has built-in support for a wide range of AWS DynamoDB features, including creating, reading, updating, deleting items, and records on a database.

On this page, you'll find a list of operations the AWS DynamoDB node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [AWS credentials](https://docs.n8n.io/integrations/builtin/credentials/aws) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Item
  - Create a new record, or update the current one if it already exists (upsert/put)
  - Delete an item
  - Get an item
  - Get all items

## Templates and examples <a id="templates-and-examples"></a>

[Browse AWS DynamoDB node documentation integration templates](https://n8n.io/integrations/aws-dynamodb) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
