> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.pagerduty.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/app-nodes/n8n-nodes-base.pagerduty.md)

# PagerDuty node <a id="pagerduty-node"></a>

Use the PagerDuty node to automate work in PagerDuty, and integrate PagerDuty with other applications. n8n has built-in support for a wide range of PagerDuty features, including creating incident notes, as well as updating, and getting all log entries and users.

On this page, you'll find a list of operations the PagerDuty node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [PagerDuty credentials](https://docs.n8n.io/integrations/builtin/credentials/pagerduty) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Incident
  - Create an incident
  - Get an incident
  - Get all incidents
  - Update an incident
- Incident Note
  - Create an incident note
  - Get all incident's notes
- Log Entry
  - Get a log entry
  - Get all log entries
- User
  - Get a user

## Templates and examples <a id="templates-and-examples"></a>

[Browse PagerDuty node documentation integration templates](https://n8n.io/integrations/pagerduty) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
