> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectdatacenter.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectdatacenter.md)

# Venafi TLS Protect Datacenter node <a id="venafi-tls-protect-datacenter-node"></a>

Use the Venafi TLS Protect Datacenter node to automate work in Venafi TLS Protect Datacenter, and integrate Venafi TLS Protect Datacenter with other applications. n8n has built-in support for a wide range of Venafi TLS Protect Datacenter features, including creating, deleting, and getting certificates.

On this page, you'll find a list of operations the Venafi TLS Protect Datacenter node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Venafi TLS Protect Datacenter credentials](https://docs.n8n.io/integrations/builtin/credentials/venafitlsprotectdatacenter) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Certificate
  - Create
  - Delete
  - Download
  - Get
  - Get Many
  - Renew
- Policy
  - Get

## Templates and examples <a id="templates-and-examples"></a>

[Browse Venafi TLS Protect Datacenter node documentation integration templates](https://n8n.io/integrations/venafi-tls-protect-datacenter) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

n8n also provides:

- A [node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectcloud) and [trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger) node for Venafi TLS Protect Cloud.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
