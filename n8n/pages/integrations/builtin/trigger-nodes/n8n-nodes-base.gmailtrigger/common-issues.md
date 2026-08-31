> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/common-issues.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/common-issues.md)

# Gmail Trigger node common issues <a id="gmail-trigger-node-common-issues"></a>

Here are some common errors and issues with the [Gmail Trigger node](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger) and steps to resolve or troubleshoot them.

## 401 unauthorized error <a id="401-unauthorized-error"></a>

The full text of the error looks like this:

```
401 - {"error":"unauthorized_client","error_description":"Client is unauthorized to retrieve access tokens using this method, or client not authorized for any of the scopes requested."}
```

This error occurs when there's an issue with the credential you're using and its scopes or permissions.

To resolve:

1. For [OAuth2](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service) credentials, make sure you've enabled the Gmail API in **APIs & Services > Library**. Refer to [Google OAuth2 Single Service - Enable APIs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#enable-apis) for more information.
2. For [Service Account](https://docs.n8n.io/integrations/builtin/credentials/google/service-account) credentials:
   1. [Enable domain-wide delegation](https://docs.n8n.io/integrations/builtin/credentials/google/service-account#enable-domain-wide-delegation).
   2. Make sure you add the Gmail API as part of the domain-wide delegation configuration.
