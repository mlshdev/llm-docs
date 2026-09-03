> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/send-email/README.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/credentials/send-email/README.md)

# Send Email credentials <a id="send-email-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Send Email](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sendemail)

## Prerequisites <a id="prerequisites"></a>

- Create an email account on a service that supports SMTP.
- Some email providers require that you enable or set up outgoing SMTP or generate an app password. Refer to your provider's documentation to see if there are other required steps.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- SMTP account

## Related resources <a id="related-resources"></a>

Simple Message Transfer Protocol (SMTP) is a standard protocol for sending and receiving email. Most email providers offer instructions on setting up their service with SMTP. Refer to your provider's SMTP instructions.

## Using SMTP account <a id="using-smtp-account"></a>

To configure this credential, you'll need:

- A **User** email address
- A **Password**: This may be the user's password or an app password. Refer to the documentation for your email provider.
- The **Host**: The SMTP host address for your email provider, often formatted as `smtp.<provider>.com`. Check with your provider.
- A **Port** number: The port depends on the encryption method:
  - Port `465` for SSL/TLS (implicit encryption)
  - Port `587` for STARTTLS (explicit encryption)
  - Port `25` for no encryption (not recommended)
    Check with your email provider for their specific requirements.
- **SSL/TLS**: This toggle controls the encryption method:
  - Turn **ON** for port `465` (uses implicit SSL/TLS encryption)
  - Turn **OFF** for port `587` (uses STARTTLS explicit encryption)
  - Turn **OFF** for port `25` (no encryption)
- **Disable STARTTLS**: When SSL/TLS is disabled, the SMTP server can still try to [upgrade the TCP connection using STARTTLS](https://en.wikipedia.org/wiki/Opportunistic_TLS). Turning this on prevents that behaviour.
- **Client Host Name**: This name identifies the client to the server. May not be required for Gmail, Outlook.com, or Yahoo. Leave this field empty unless your email provider or administrator specifically requests it. If you do need to provide a value, use a fully qualified domain name (FQDN) such as `mail.yourdomain.com`. Avoid generic values like `localhost`.

### Provider instructions <a id="provider-instructions"></a>

Refer to the quickstart guides for these common email providers.

#### Gmail <a id="gmail"></a>

Refer to [Gmail](https://docs.n8n.io/integrations/builtin/credentials/send-email/gmail).

#### Outlook.com <a id="outlookcom"></a>

Refer to [Outlook.com](https://docs.n8n.io/integrations/builtin/credentials/send-email/outlook).

#### Yahoo <a id="yahoo"></a>

Refer to [Yahoo](https://docs.n8n.io/integrations/builtin/credentials/send-email/yahoo).

### My provider isn't listed <a id="my-provider-isnt-listed"></a>

If your email provider isn't listed here, search for `SMTP settings` to find their instructions. (These instructions may also be included with `IMAP settings` or `POP settings`.)
