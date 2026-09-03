> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/google/README.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/credentials/google/README.md)

# Google

This section contains:

- [OAuth2 single service](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service): Create an OAuth2 credential for a specific service node, such as the Gmail node. Two options exist:
  - [Managed OAuth2](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#managed-oauth2): Sign in with Google directly on n8n, with no setup required on the Google Cloud Console. Available for n8n Cloud users only, for certain Google nodes.
  - [Custom OAuth2](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#custom-oauth2): Configure an OAuth2 app in the Google Cloud Console and connect it to your n8n credential.
- [OAuth2 API (generic)](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic): Create an OAuth2 credential for use with [custom operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes).
- [Service Account](https://docs.n8n.io/integrations/builtin/credentials/google/service-account): Create a [Service Account](https://cloud.google.com/iam/docs/service-account-overview) credential for some specific service nodes.
- [Google PaLM and Gemini](https://docs.n8n.io/integrations/builtin/credentials/googleai): Get a Google Gemini/Google PaLM API key.

## OAuth2 and Service Account <a id="oauth2-and-service-account"></a>

Google service nodes support two authentication methods:

- [OAuth2](https://developers.google.com/identity/protocols/oauth2): Recommended because it's more widely available and easier to set up.
- [Service Account](https://cloud.google.com/iam/docs/understanding-service-accounts): Refer to the [Google documentation: Understanding service accounts](https://cloud.google.com/iam/docs/understanding-service-accounts) for guidance on when you need a service account.

### Managed OAuth2 for n8n Cloud users <a id="managed-oauth2-for-n8n-cloud-users"></a>

[Managed OAuth2](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service#managed-oauth2) is available for the following Google nodes, for n8n Cloud users. This provides a simplified credential creation process:

- [Google Calendar](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar)
- [Google Calendar Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlecalendartrigger)
- [Google Chat](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlechat)
- [Google Contacts](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecontacts)
- [Google Docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs)
- [Google Drive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)
- [Google Drive Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger)
- [Google Mail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail)
- [Google Mail Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger)
- [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets)
- [Google Sheets Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googlesheetstrigger)
- [Google Slides](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleslides)
- [Google Tasks](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googletasks)
- [YouTube](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.youtube)

## Compatible nodes <a id="compatible-nodes"></a>

Once configured, you can use your credentials to authenticate the following nodes. Most nodes are compatible with OAuth2 authentication. n8n has limited support for Service Account authentication.

| Node                                                                                                                            | OAuth | Service Account |
| ------------------------------------------------------------------------------------------------------------------------------- | :---: | :-------------: |
| [Google Ads](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleads)                                       |   ✅   |        ❌        |
| [Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail)                                                |   ✅   |        ⚠️       |
| [Google Analytics](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleanalytics)                           |   ✅   |        ❌        |
| [Google BigQuery](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlebigquery)                             |   ✅   |        ✅        |
| [Google Books](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlebooks)                                   |   ✅   |        ✅        |
| [Google Calendar](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar)                             |   ✅   |        ❌        |
| [Google Chat](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlechat)                                     |   ✅   |        ✅        |
| [Google Cloud Storage](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage)                    |   ✅   |        ✅        |
| [Google Contacts](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecontacts)                             |   ✅   |        ❌        |
| [Google Cloud Firestore](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudfirestore)                |   ✅   |        ✅        |
| [Google Cloud Natural Language](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudnaturallanguage)   |   ✅   |        ❌        |
| [Google Cloud Realtime Database](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudrealtimedatabase) |   ✅   |        ❌        |
| [Google Docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledocs)                                     |   ✅   |        ✅        |
| [Google Drive](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googledrive)                                   |   ✅   |        ✅        |
| [Google Drive Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger)                |   ✅   |        ✅        |
| [Google Perspective](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleperspective)                       |   ✅   |        ❌        |
| [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets)                                 |   ✅   |        ✅        |
| [Google Slides](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleslides)                                 |   ✅   |        ✅        |
| [Google Tasks](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googletasks)                                   |   ✅   |        ❌        |
| [Google Translate](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googletranslate)                           |   ✅   |        ✅        |
| [Google Workspace Admin](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gsuiteadmin)                         |   ✅   |        ❌        |
| [YouTube](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.youtube)                                            |   ✅   |        ❌        |

> **Warning**
> **Gmail and Service Accounts**
>
> Google technically supports Service Accounts for use with Gmail, but it requires enabling domain-wide delegation, which Google discourages, and its behavior can be inconsistent.
>
> n8n recommends using OAuth2 with the Gmail node.
