> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/jotform.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/credentials/jotform.md)

# Jotform credentials <a id="jotform-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Jotform Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.jotformtrigger)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [Jotform's API documentation](https://api.jotform.com/docs/) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need a [Jotform](https://www.jotform.com/) account and:

- An **API Key**
- The **API Domain**

To set it up:

1. Go to **Settings >** [**API**](https://www.jotform.com/myaccount/api).
2. Select **Create New Key**.
3. Select the **Name** in Jotform to update the API key name to something meaningful, like `n8n integration`.
4. Copy the **API Key** and enter it in your n8n credential.
5. In n8n, select the **API Domain** that applies to you based on the forms you're using:
   - **api.jotform.com**: Use this unless the other form types apply to you.
   - **eu-api.jotform.com**: Select this if you're using Jotform [EU Safe Forms](https://www.jotform.com/eu-safe-forms/).
   - **hipaa-api.jotform.com**: Select this if you're using Jotform [HIPAA forms](https://www.jotform.com/hipaa/).

Refer to the [Jotform API documentation](https://api.jotform.com/docs/) for more information on creating keys and API domains.
