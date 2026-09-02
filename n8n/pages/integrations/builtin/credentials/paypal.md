> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/paypal.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/credentials/paypal.md)

# PayPal credentials <a id="paypal-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [PayPal](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.paypal)
- [PayPal Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.paypaltrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [PayPal developer](https://developer.paypal.com/home) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API client and secret

## Related resources <a id="related-resources"></a>

Refer to [Paypal's API documentation](https://developer.paypal.com/api/rest/) for more information about the service.

## Using API client and secret <a id="using-api-client-and-secret"></a>

To configure this credential, you'll need:

- A **Client ID**: Generated when you create an app.
- A **Secret**: Generated when you create an app.
- An **Environment**: Select **Live** or **Sandbox**.

To generate the **Client ID** and **Secret**, log in to your Paypal [developer dashboard](https://developer.paypal.com/dashboard/). Select **Apps & Credentials > Rest API apps > Create app**. Refer to [Get client ID and client secret](https://developer.paypal.com/api/rest/#link-getclientidandclientsecret) for more information.
