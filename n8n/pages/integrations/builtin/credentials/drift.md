> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/drift.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/credentials/drift.md)

# Drift credentials <a id="drift-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Drift](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.drift)

## Prerequisites <a id="prerequisites"></a>

- Create a [Drift](https://www.drift.com/) account.
- [Create a Drift app](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API personal access token
- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Drift's API documentation](https://devdocs.drift.com/docs/using-drift-apis) for more information about the service.

## Using API personal access token <a id="using-api-personal-access-token"></a>

To configure this credential, you'll need:

- A **Personal Access Token**: To get a token, [create a Drift app](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-). [Install the app](https://devdocs.drift.com/docs/quick-start#3-install-it-to-your-drift-account-) to generate an OAuth Access token. Add this to the n8n credential as your **Personal Access Token**.

## Using OAuth2 <a id="using-oauth2"></a>

> **Info**
> **Note for n8n Cloud users**
>
> Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch or need more detail on what's happening in the OAuth web flow, refer to the instructions in the [Drift Authentication and Scopes documentation](https://devdocs.drift.com/docs/authentication-and-scopes) to set up OAuth for your app.
