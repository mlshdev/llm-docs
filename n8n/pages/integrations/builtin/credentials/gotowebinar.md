> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/gotowebinar.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/gotowebinar.md)

# GoTo Webinar credentials <a id="goto-webinar-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [GoToWebinar](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gotowebinar)

## Prerequisites <a id="prerequisites"></a>

Create a [GoToWebinar](https://www.goto.com/webinar) account with [Developer Center](https://developer.goto.com/) access.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [GoToWebinar's API documentation](https://developer.goto.com/GoToWebinarV2) for more information about authenticating with the service.

## Using OAuth2 <a id="using-oauth2"></a>

To configure this credential, you'll need:

- A **Client ID**: Provided once you create an OAuth client
- A **Client Secret**: Provided once you create an OAuth client

Refer to the [Create an OAuth client documentation](https://developer.goto.com/guides/Get%20Started/02_HOW_createClient/) for detailed instructions on creating an OAuth client. Copy the **OAuth Callback URL** from n8n to use as the **Redirect URI** in your OAuth client. The Client ID and Client secret are provided once you've finished setting up your client.
