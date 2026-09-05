> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/msg91.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/credentials/msg91.md)

# MSG91 credentials <a id="msg91-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [MSG91](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.msg91)

## Prerequisites <a id="prerequisites"></a>

Create a [MSG91](https://msg91.com/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API key

## Related resources <a id="related-resources"></a>

Refer to [MSG91's API documentation](https://docs.msg91.com/overview) for more information about the service.

## Using API key <a id="using-api-key"></a>

To configure this credential, you'll need:

- An **Authentication Key**: To get your Authentication Key, go to the user menu and select **Authkey**. Refer to MSG91's [Where can I find my authentication key? documentation](https://msg91.com/help/api/where-can-i-find-my-authentication-ke) for more information.

## IP Security <a id="ip-security"></a>

MSG91 enables [IP Security](https://msg91.com/help/api/what-do-you-mean-by-api-security) by default for authkeys.

For the n8n credentials to function with this setting enabled, add all the [n8n IP addresses](https://docs.n8n.io/deploy/use-n8n-cloud/configure-cloud/find-your-ip-addresses) as whitelisted IPs in MSG91. You can add them in one of two places, depending on your desired security level:

- To allow any/all authkeys in the account to work with n8n, add the n8n IP addresses in the **Company's whitelisted IPs** section of the **Authkey** page.
- To allow only specific authkeys to work with n8n, add the n8n IP addresses in the **Whitelisted IPs** section of an authkey's details.
