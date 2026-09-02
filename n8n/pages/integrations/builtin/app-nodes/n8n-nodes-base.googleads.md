> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.googleads.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/app-nodes/n8n-nodes-base.googleads.md)

# Google Ads node <a id="google-ads-node"></a>

Use the Google Ads node to automate work in Google Ads, and integrate Google Ads with other applications. n8n has built-in support for a wide range of Google Ads features, including getting campaigns.

On this page, you'll find a list of operations the Google Ads node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Google Ads credentials](https://docs.n8n.io/integrations/builtin/credentials/google) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Campaign
  - Get all campaigns
  - Get a campaign

## Templates and examples <a id="templates-and-examples"></a>

[Browse Google Ads node documentation integration templates](https://n8n.io/integrations/google-ads) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Google Ads' documentation](https://developers.google.com/google-ads/api/docs/start) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
