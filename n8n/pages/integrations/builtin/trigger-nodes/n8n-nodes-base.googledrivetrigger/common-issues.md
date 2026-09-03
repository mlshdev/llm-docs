> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/common-issues.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/common-issues.md)

# Google Drive Trigger node common issues <a id="google-drive-trigger-node-common-issues"></a>

Here are some common errors and issues with the [Google Drive Trigger node](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger) and steps to resolve or troubleshoot them.

## 401 unauthorized error <a id="401-unauthorized-error"></a>

The full text of the error looks like this:

```
401 - {"error":"unauthorized_client","error_description":"Client is unauthorized to retrieve access tokens using this method, or client not authorized for any of the scopes requested."}
```

This error occurs when there's an issue with the credential you're using and its scopes or permissions.

To resolve:

1. For [OAuth2](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service) credentials, make sure you've enabled the Google Drive API in **APIs & Services > Library**. Refer to [Google OAuth2 Single Service - Enable APIs](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#enable-apis) for more information.
2. For [Service Account](https://docs.n8n.io/integrations/builtin/credentials/google/service-account) credentials:
   1. [Enable domain-wide delegation](https://docs.n8n.io/integrations/builtin/credentials/google/service-account#enable-domain-wide-delegation).
   2. Make sure you add the Google Drive API as part of the domain-wide delegation configuration.

## Handling more than one file change <a id="handling-more-than-one-file-change"></a>

The Google Drive Trigger node polls Google Drive for changes at a set interval (once every minute by default).

If multiple changes to the **Watch For** criteria occur during the polling interval, a single Google Drive Trigger event occurs containing the changes as items. To handle this, your workflow must account for times when the data might contain more than one item.

You can use an [if node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if) or a [switch node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch) to change your workflow's behavior depending on whether the data from the Google Drive Trigger node contains a single item or multiple items.
