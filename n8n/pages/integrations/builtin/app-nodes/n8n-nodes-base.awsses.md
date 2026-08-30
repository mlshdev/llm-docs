> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.awsses.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/app-nodes/n8n-nodes-base.awsses.md)

# AWS SES node <a id="aws-ses-node"></a>

Use the AWS SES node to automate work in AWS SES, and integrate AWS SES with other applications. n8n has built-in support for a wide range of AWS SES features, including creating, getting, deleting, sending, updating, and adding templates and emails.

On this page, you'll find a list of operations the AWS SES node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [AWS SES credentials](https://docs.n8n.io/integrations/builtin/credentials/aws) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Custom Verification Email
  - Create a new custom verification email template
  - Delete an existing custom verification email template
  - Get the custom email verification template
  - Get all the existing custom verification email templates for your account
  - Add an email address to the list of identities
  - Update an existing custom verification email template.
- Email
  - Send
  - Send Template
- Template
  - Create a template
  - Delete a template
  - Get a template
  - Get all templates
  - Update a template

## Templates and examples <a id="templates-and-examples"></a>

[Browse AWS SES node documentation integration templates](https://n8n.io/integrations/aws-ses) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
