> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlook.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlook.md)

# Microsoft Outlook node <a id="microsoft-outlook-node"></a>

Use the Microsoft Outlook node to automate work in Microsoft Outlook, and integrate Microsoft Outlook with other applications. n8n has built-in support for a wide range of Microsoft Outlook features, including creating, updating, deleting, and getting folders, messages, and drafts.

On this page, you'll find a list of operations the Microsoft Outlook node supports and links to more resources.

> **Info**
> **Credentials**
>
> This node's **Authentication** dropdown offers three options:
>
> - **Outlook OAuth2**: the Microsoft Outlook-specific OAuth2 credential (default).
> - **Microsoft OAuth2 (Graph)**: a generic Microsoft Graph credential that you can reuse across other Microsoft nodes. When you select this option, make sure you grant the credential the scopes this node needs (for example, `Mail.ReadWrite`, `Mail.Send`, `Calendars.ReadWrite`, and `Contacts.ReadWrite`).
> - **Microsoft Entra Service Principal (App-Only)**: app-only access through a Microsoft Entra app registration, with no signed-in user, available from version 2 of the node. Refer to [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for setup and required application permissions.
>
> Refer to [Microsoft credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoft) for guidance on setting up authentication.

> **Info**
> **Government Cloud Support**
>
> If you're using a government cloud tenant (US Government, US Government DOD, or China), make sure to select the appropriate **Microsoft Graph API Base URL** in your Microsoft credentials configuration.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

> **Info**
> **Human-in-the-loop for AI tool calls**
>
> This node can be used as a human review step for AI Agent tool calls. When configured this way, the AI Agent will pause and request human approval through this service before executing tools that require oversight. Learn more in [Human-in-the-loop for AI tool calls](https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools).

## Operations <a id="operations"></a>

- Calendar
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Contact
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Draft
  - Create
  - Delete
  - Get
  - Send
  - Update
- Event
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Folder
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Folder Message
  - Get Many
- Message
  - Delete
  - Get
  - Get Many
  - Move
  - Reply
  - Send
  - Send and Wait for Response
  - Update
- Message Attachment
  - Add
  - Download
  - Get
  - Get Many

## Waiting for a response <a id="waiting-for-a-response"></a>

By choosing the **Send and Wait for a Response** operation, you can send a message and pause the workflow execution until a person confirms the action or provides more information.

### Response Type <a id="response-type"></a>

You can choose between the following types of waiting and approval actions:

- **Approval**: Users can approve or disapprove from within the message.
- **Free Text**: Users can submit a response with a form.
- **Custom Form**: Users can submit a response with a custom form.

You can customize the waiting and response behavior depending on which response type you choose. You can configure these options in any of the above response types:

- **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
- **Append n8n Attribution**: Whether to mention in the message that it was sent automatically with n8n (turned on) or not (turned off).

### Approval response customization <a id="approval-response-customization"></a>

When using the Approval response type, you can choose whether to present only an approval button or both approval *and* disapproval buttons.

You can also customize the button labels for the buttons you include.

### Free Text response customization <a id="free-text-response-customization"></a>

When using the Free Text response type, you can customize the message button label, the form title and description, and the response button label.

### Custom Form response customization <a id="custom-form-response-customization"></a>

When using the Custom Form response type, you build a form using the fields and options you want.

You can customize each form element with the settings outlined in the [n8n Form trigger's form elements](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger#form-elements). To add more fields, select the **Add Form Element** button.

You'll also be able to customize the message button label, the form title and description, and the response button label.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Microsoft Outlook node documentation integration templates](https://n8n.io/integrations/microsoft-outlook) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Outlook's API documentation](https://learn.microsoft.com/en-us/outlook/rest/get-started) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
