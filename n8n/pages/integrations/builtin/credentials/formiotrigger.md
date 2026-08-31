> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/formiotrigger.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/credentials/formiotrigger.md)

# Form.io Trigger credentials <a id="formio-trigger-credentials"></a>

You can use these credentials to authenticate the following nodes:

- [Form.io Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.formiotrigger)

## Supported authentication methods <a id="supported-authentication-methods"></a>

- Basic auth

## Related resources <a id="related-resources"></a>

Refer to [Form.io's API documentation](https://apidocs.form.io/) for more information about the service.

## Using basic auth <a id="using-basic-auth"></a>

To configure this credential, you'll need a [Form.io](https://www.form.io/) account and:

- Your **Environment**
- Your login **Email address**
- Your **Password**

To set up the credential:

1. Select your **Environment**:
   - Choose **Cloud hosted** if you aren't hosting Form.io yourself.
   - Choose **Self-hosted** if you're hosting Form.io yourself. Then add:
     - Your **Self-Hosted Domain**. Use only the domain itself. For example, if you view a form at `https://yourserver.com/yourproject/manage/view`, the Self-Hosted Domain is `https://yourserver.com`.
2. Enter the **Email address** you use to log in to Form.io.
3. Enter the **Password** you use to log in to Form.io.
