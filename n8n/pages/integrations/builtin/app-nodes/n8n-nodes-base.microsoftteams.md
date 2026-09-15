> Pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams.md](https://github.com/n8n-io/n8n-docs/blob/46cfbebae86e861ae0a5bb0ff78d1798361bc3e0/docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams.md)

# Microsoft Teams node <a id="microsoft-teams-node"></a>

Use the Microsoft Teams node to automate work in Microsoft Teams, and integrate Microsoft Teams with other applications. n8n has built-in support for a wide range of Microsoft Teams features, including channels, channel and chat messages, chat members, online meetings, and tasks.

On this page, you'll find a list of operations the Microsoft Teams node supports and links to more resources.

> **Info**
> **Credentials**
>
> From version 2 of the node, the **Authentication** dropdown offers three options:
>
> - **Teams OAuth2**: the Microsoft Teams-specific OAuth2 credential (default). Its default scopes cover every resource on this page, including `Chat.ReadWrite` for chat members and chat messages and, from n8n 2.39.0, `OnlineMeetings.ReadWrite` for online meetings.
> - **Microsoft OAuth2 (Graph)**: a generic Microsoft Graph credential that you can reuse across other Microsoft nodes. When you select this option, grant the credential the scopes this node needs. Refer to [Default scopes for Microsoft Teams](https://docs.n8n.io/integrations/builtin/credentials/microsoft#default-scopes-for-microsoft-teams) for the full list.
> - **Service Principal (App-Only)**: app-only access through a Microsoft Entra app registration, with no signed-in user. Some resources need a signed-in user and aren't available with this credential. Refer to [Service Principal credential support](#service-principal-credential-support) on this page, and to [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for setup and the required application permissions.
>
> If you connected a Teams OAuth2 credential before n8n 2.39.0, reconnect it so it picks up `OnlineMeetings.ReadWrite`. If the credential uses **Custom Scopes**, add the scope to **Enabled Scopes** instead.
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

> **Info**
> **Feature availability**
>
> The Chat Member and Online Meeting resources are available from n8n 2.39.0, together with the Channel Message **Get**, **Get Many Replies**, and **Reply** operations. The Chat Member **Add** operation and the Online Meeting **Create or Get**, **Delete**, and **Update** operations are available from n8n 2.40.0.

- Channel
  - Create
  - Delete
  - Get
  - Get Many
  - Update
- Channel Message
  - Create
  - Get
  - Get Many
  - Get Many Replies
  - Reply
- Chat Member
  - Add
  - Get Many
- Chat Message
  - Create
  - Get
  - Get Many
  - Send and Wait for Response
- Online Meeting
  - Create
  - Create or Get
  - Delete
  - Get
  - Update
- Task
  - Create
  - Delete
  - Get
  - Get Many
  - Update

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

## Service Principal credential support

The **Service Principal (App-Only)** credential has no signed-in user, so the Microsoft Teams node can't run operations that act as one. The list below states what's available for each resource. For the unavailable resources and operations, the node hides their fields and shows a notice when you select this credential. A workflow that still uses one of them fails with an error before the node sends any request.

- **Channel**: all operations.
- **Channel Message**: Get, Get Many, and Get Many Replies. Create and Reply aren't available, because app-only Microsoft Graph only supports migration import for channel messages. Use an OAuth2 credential to send channel messages.
- **Chat Member**: not available. The node's chat picker lists the signed-in user's chats, which app-only access can't do, so the node blocks the whole resource, including chats given by ID.
- **Chat Message**: not available. The node sends and reads chat messages as the signed-in user.
- **Online Meeting**: not available. The node creates and manages online meetings as the signed-in user.
- **Task**: all operations. Get Many always lists the tasks of a plan: the node hides the **Tasks For** option, so **Group Member** isn't available. The node also hides the **Team** picker, and the **Plan**, **Bucket**, and **Assigned To** fields accept an ID only.

Refer to [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for the application permissions each operation needs.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Microsoft Teams node documentation integration templates](https://n8n.io/integrations/microsoft-teams) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Microsoft Teams' API documentation](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) for more information about the service.

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
