> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.strava.md](https://github.com/n8n-io/n8n-docs/blob/32d4c1af45711af43703671a66f502ef7bd2b932/docs/integrations/builtin/app-nodes/n8n-nodes-base.strava.md)

# Strava node <a id="strava-node"></a>

Use the Strava node to automate work in Strava, and integrate Strava with other applications. n8n has built-in support for a wide range of Strava features, including creating new activities, and getting activity information.

On this page, you'll find a list of operations the Strava node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [Strava credentials](https://docs.n8n.io/integrations/builtin/credentials/strava) for guidance on setting up authentication.

## Operations <a id="operations"></a>

- Activity
  - Create a new activity
  - Get an activity
  - Get all activities
  - Get all activity comments
  - Get all activity kudos
  - Get all activity laps
  - Get all activity zones
  - Update an activity

## Templates and examples <a id="templates-and-examples"></a>

[Browse Strava node documentation integration templates](https://n8n.io/integrations/strava) or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported <a id="what-to-do-if-your-operation-isnt-supported"></a>

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1. In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2. Select the service you want to connect to.
3. Select your credential.

Refer to [Custom API operations](https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes) for more information.
