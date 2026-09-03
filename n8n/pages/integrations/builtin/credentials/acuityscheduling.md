> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/acuityscheduling.md](https://github.com/n8n-io/n8n-docs/blob/6f4b48e69e3ab9acbf023f18020c40c125c16d45/docs/integrations/builtin/credentials/acuityscheduling.md)

# Acuity Scheduling credentials <a id="acuity-scheduling-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Acuity Scheduling Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.acuityschedulingtrigger)

## Prerequisites <a id="prerequisites"></a>

Create an [Acuity Scheduling](https://acuityscheduling.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key
- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Acuity's API documentation](https://developers.acuityscheduling.com/reference/quick-start) for more information about working with the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- A numeric **User ID**
- An **API Key**

Refer to the [Acuity API Quick Start authentication instructions](https://developers.acuityscheduling.com/reference/quick-start#authentication) to generate an API key and view your User ID.

## Using OAuth2 <a id="using-oauth2"></a>

> **Info**
> **Note for n8n Cloud users**
>
> Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to set this up from scratch, complete the [Acuity OAuth2 Account Registration page](https://acuityscheduling.com/oauth2/register). Use the **Client ID** and **Client Secret** provided from that registration.
