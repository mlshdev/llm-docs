> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.awscertificatemanager.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.awscertificatemanager.md)

# AWS Certificate Manager node <a id="aws-certificate-manager-node"></a>

Use the AWS Certificate Manager node to automate work in AWS Certificate Manager, and integrate AWS Certificate Manager with other applications. n8n has built-in support for a wide range of AWS Certificate Manager features, including creating, deleting, getting, and renewing SSL certificates.

On this page, you'll find a list of operations the AWS Certificate Manager node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [AWS Certificate Manager credentials](https://docs.n8n.io/integrations/builtin/credentials/aws) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Certificate
  - Delete
  - Get
  - Get Many
  - Get Metadata
  - Renew

## Templates and examples <a id="templates-and-examples"></a>

[Browse AWS Certificate Manager node documentation integration templates](https://n8n.io/integrations/aws-certificate-manager) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [AWS Certificate Manager's documentation](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) for more information on this service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
