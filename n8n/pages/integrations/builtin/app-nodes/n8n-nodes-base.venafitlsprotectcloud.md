> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectcloud.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectcloud.md)

# Venafi TLS Protect Cloud node <a id="venafi-tls-protect-cloud-node"></a>

Use the Venafi TLS Protect Cloud node to automate work in Venafi TLS Protect Cloud, and integrate Venafi TLS Protect Cloud with other applications. n8n has built-in support for a wide range of Venafi TLS Protect Cloud features, including deleting and downloading certificates, as well as creating certificates requests.

On this page, you'll find a list of operations the Venafi TLS Protect Cloud node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Venafi TLS Protect Cloud credentials](https://docs.n8n.io/integrations/builtin/credentials/venafitlsprotectcloud) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Certificate
  - Delete
  - Download
  - Get
  - Get Many
  - Renew
- Certificate Request
  - Create
  - Get
  - Get Many

## Templates and examples <a id="templates-and-examples"></a>

[Browse Venafi TLS Protect Cloud node documentation integration templates](https://n8n.io/integrations/venafi-tls-protect-cloud) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Venafi's REST API documentation](https://docs.venafi.cloud/api/vaas-rest-api/) for more information on this service.

n8n also provides:

- A [trigger node](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger) for Venafi TLS Protect Cloud.
- A [node](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectdatacenter) for Venafi TLS Protect Datacenter.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
