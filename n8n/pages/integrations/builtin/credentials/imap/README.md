> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/imap/README.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/credentials/imap/README.md)

# IMAP credentials <a id="imap-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [IMAP Email](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.emailimap)

## Prerequisites <a id="prerequisites"></a>

Create an email account on a service with IMAP support.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- User account

## Related resources <a id="related-resources"></a>

Internet Message Access Protocol (IMAP) is a standard protocol for receiving email. Most email providers offer instructions on setting up their service with IMAP; refer to your provider's IMAP instructions.

## Using user account <a id="using-user-account"></a>

To configure this credential, you'll need:

- A **User** name: The email address you're retrieving email for.
- A **Password**: Either the password you use to check email or an app password. Your provider will tell you whether to use your own password or to generate an app password.
- A **Host**: The IMAP host address for your email provider, often formatted as `imap.<provider>.com`. Check with your provider.
- A **Port** number: The default is port `993`. Use this port unless your provider or email administrator tells you to use something different.

Choose whether to use **SSL/TLS** and whether to **Allow Self-Signed Certificates**.

### Provider instructions <a id="provider-instructions"></a>

Refer to the quickstart guides for these common email providers.

#### Gmail <a id="gmail"></a>

Refer to [Gmail](https://docs.n8n.io/integrations/builtin/credentials/imap/gmail).

#### Outlook.com <a id="outlookcom"></a>

Refer to [Outlook.com](https://docs.n8n.io/integrations/builtin/credentials/imap/outlook).

#### Yahoo <a id="yahoo"></a>

Refer to [Yahoo](https://docs.n8n.io/integrations/builtin/credentials/imap/yahoo).

### My provider isn't listed <a id="my-provider-isnt-listed"></a>

If your email provider isn't listed here, search for their `IMAP settings` or `IMAP instructions`.
