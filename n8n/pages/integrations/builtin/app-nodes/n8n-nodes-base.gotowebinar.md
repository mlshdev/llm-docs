> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.gotowebinar.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/app-nodes/n8n-nodes-base.gotowebinar.md)

# GoToWebinar node <a id="gotowebinar-node"></a>

Use the GoToWebinar node to automate work in GoToWebinar, and integrate GoToWebinar with other applications. n8n has built-in support for a wide range of GoToWebinar features, including creating, getting, and deleting attendees, organizers, and registrants.

On this page, you'll find a list of operations the GoToWebinar node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [GoToWebinar credentials](https://docs.n8n.io/integrations/builtin/credentials/gotowebinar) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Attendee
  - Get
  - Get All
  - Get Details
- Co-Organizer
  - Create
  - Delete
  - Get All
  - Re-invite
- Panelist
  - Create
  - Delete
  - Get All
  - Re-invite
- Registrant
  - Create
  - Delete
  - Get
  - Get All
- Session
  - Get
  - Get All
  - Get Details
- Webinar
  - Create
  - Get
  - Get All
  - Update

## Templates and examples <a id="templates-and-examples"></a>

[Browse GoToWebinar node documentation integration templates](https://n8n.io/integrations/gotowebinar) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
