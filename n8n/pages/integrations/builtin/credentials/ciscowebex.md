> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/ciscowebex.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/ciscowebex.md)

# Webex by Cisco credentials <a id="webex-by-cisco-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Webex by Cisco](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.ciscowebex)
- [Webex by Cisco Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.ciscowebextrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [Webex by Cisco](https://www.webex.com/) account (this should automatically get you [developer account access](https://developer.webex.com)).

## Supported authentication methods <a id="supported-authentication-methods"></a>

- OAuth2

## Related resources <a id="related-resources"></a>

Refer to [Webex's API documentation](https://developer.webex.com/docs/getting-started) for more information about the service.

## Using OAuth2 <a id="using-oauth2"></a>

> **Info**
> **Note for n8n Cloud users**
>
> You'll only need to enter the Credentials Name and select the **Connect my account** button in the OAuth credential to connect your Webex by Cisco account to n8n.

Should you need to configure OAuth2 from scratch, you'll need to create an integration to use this credential. Refer to the instructions in the [Webex Registering your Integration documentation](https://developer.webex.com/docs/integrations#registering-your-integration) to begin.

n8n recommends using the following **Scopes** for your integration:

- `spark:rooms_read`
- `spark:messages_write`
- `spark:messages_read`
- `spark:memberships_read`
- `spark:memberships_write`
- `meeting:recordings_write`
- `meeting:recordings_read`
- `meeting:preferences_read`
- `meeting:schedules_write`
- `meeting:schedules_read`
