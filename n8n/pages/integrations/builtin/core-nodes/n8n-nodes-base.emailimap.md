> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.emailimap.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/core-nodes/n8n-nodes-base.emailimap.md)

# Email Trigger (IMAP) node <a id="email-trigger-imap-node"></a>

Use the IMAP Email node to receive emails using an IMAP email server. This node is a trigger node.

> **Info**
> **Credential**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/imap).

## Operations <a id="operations"></a>

- Receive an email

## Node parameters <a id="node-parameters"></a>

Configure the node using the following parameters.

### Credential to connect with <a id="credential-to-connect-with"></a>

Select or create an [IMAP credential](https://docs.n8n.io/integrations/builtin/credentials/imap) to connect to the server with.

### Mailbox Name <a id="mailbox-name"></a>

Enter the mailbox from which you want to receive emails.

### Action <a id="action"></a>

Choose whether you want an email marked as read when n8n receives it. **None** will leave it marked unread. **Mark as Read** will mark it as read.

### Download Attachments <a id="download-attachments"></a>

This toggle controls whether to download email attachments (turned on) or not (turned off). Only set this if necessary, since it increases processing.

### Format <a id="format"></a>

Choose the format to return the message in from these options:

- **RAW**: This format returns the full email message data with body content in the raw field as a base64url encoded string. It doesn't use the payload field.
- **Resolved**: This format returns the full email with all data resolved and attachments saved as binary data.
- **Simple**: This format returns the full email. Don't use it if you want to gather inline attachments.

## Node options <a id="node-options"></a>

You can further configure the node using these **Options**.

### Custom Email Rules <a id="custom-email-rules"></a>

Enter custom email fetching rules to determine which emails the node fetches.

Refer to [node-imap's search function criteria](https://github.com/mscdex/node-imap) for more information.

### Force Reconnect Every Minutes <a id="force-reconnect-every-minutes"></a>

Set an interval in minutes to force reconnection.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Email Trigger (IMAP) node documentation integration templates](https://n8n.io/integrations/email-trigger-imap) or [search all templates](https://n8n.io/workflows/)
