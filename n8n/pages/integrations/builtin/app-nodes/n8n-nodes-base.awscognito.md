> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.awscognito.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/app-nodes/n8n-nodes-base.awscognito.md)

# AWS Cognito node <a id="aws-cognito-node"></a>

Use the AWS Cognito node to automate work in AWS Cognito and integrate AWS Cognito with other applications. n8n has built-in support for a wide range of AWS Cognito features, which includes creating, retrieving, updating, and deleting groups, users, and user pools.

On this page, you'll find a list of operations the AWS Cognito node supports, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/aws).

## Operations <a id="operations"></a>

- Group:
  - Create: Create a new group.
  - Delete: Delete an existing group.
  - Get: Retrieve details about an existing group.
  - Get Many: Retrieve a list of groups.
  - Update: Update an existing group.
- User:
  - Add to Group: Add an existing user to a group.
  - Create: Create a new user.
  - Delete: Delete a user.
  - Get: Retrieve information about an existing user.
  - Get Many: Retrieve a list of users.
  - Remove From Group: Remove a user from a group.
  - Update: Update an existing user.
- User Pool:
  - Get: Retrieve information about an existing user pool.

## Templates and examples <a id="templates-and-examples"></a>

[Browse AWS Cognito node documentation integration templates](https://n8n.io/integrations/aws-cognito) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [AWS Cognito's documentation](https://docs.aws.amazon.com/cognito/) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
