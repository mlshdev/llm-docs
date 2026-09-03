> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/reddit.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/credentials/reddit.md)

# Reddit credentials <a id="reddit-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Reddit](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.reddit)

## Prerequisites <a id="prerequisites"></a>

Create a [Reddit](https://reddit.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Reddit's developer documentation](https://support.reddithelp.com/hc/en-us/articles/14945211791892-Developer-Platform-Accessing-Reddit-Data) for more information about the service.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need:

- A **Client ID**
- A **Client Secret**

> **Warning**
> **API access requires pre-approval**
>
> Reddit closed self-service access to their public data API in November 2025. Now, Reddit require manual approval before you can create new apps. Review Reddit's [Responsible Builder Policy](https://support.reddithelp.com/hc/en-us/articles/42728983564564-Responsible-Builder-Policy) and submit a request via [Reddit's Developer Support form](https://support.reddithelp.com/hc/en-us/requests/new?ticket_form_id=14868593862164).

Once approved, create a [third-party app](https://www.reddit.com/prefs/apps). Visit the previous link, or go to your **profile > Settings > Privacy > Third-party app authorizations > are you a developer? create an app**.  and use these settings:

- Copy the **OAuth Callback URL** from n8n and use it as your app's **redirect uri**.
- The app's client ID displays underneath your app name. Copy that and add it as your n8n **Client ID**.
- Copy the app's **secret** and add it as your n8n **Client Secret**.
