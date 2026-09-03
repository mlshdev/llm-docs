> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/eventbrite.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/credentials/eventbrite.md)

# Eventbrite credentials <a id="eventbrite-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Eventbrite Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.eventbritetrigger)

## Prerequisites <a id="prerequisites"></a>

Create an [Eventbrite](https://www.eventbrite.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API private key
- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Eventbrite's API documentation](https://www.eventbrite.com/platform/api) for more information about the service.

## Using API private key <a id="using-api-private-key"></a>

To configure this credential, you'll need:

- A **Private Key**: Refer to the [Eventbrite API Authentication Get a Private Token documentation](https://www.eventbrite.com/platform/api#/introduction/authentication/1.-get-a-private-token) for detailed steps to generate a Private Token. Use this private token as the **Private Key** in the n8n credential.

## Using OAuth2 <a id="using-oauth2"></a>

> **Info**
> **Note for n8n Cloud users**
>
> Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch or need more detail on what's happening in the OAuth web flow, refer to the instructions in the [Eventbrite API authentication For App Partners documentation](https://www.eventbrite.com/platform/api#/introduction/authentication/2.-\(for-app-partners\)-authorize-your-users) to set up OAuth.
