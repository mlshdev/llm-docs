> Commit-pinned source for n8n main: [docs/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftteamstrigger.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftteamstrigger.md)

# Microsoft Teams Trigger node <a id="microsoft-teams-trigger-node"></a>

Use the Microsoft Teams Trigger node to respond to events in [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) and integrate Microsoft Teams with other applications.

On this page, you'll find a list of events the Microsoft Teams Trigger node can respond to and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/microsoft). This node also supports the [Microsoft Entra Service Principal credentials](https://docs.n8n.io/integrations/builtin/credentials/microsoftentraserviceprincipal) for app-only access with no signed-in user: select **Service Principal (App-Only)** in the **Authentication** dropdown.

> **Info**
> **Government Cloud Support**
>
> If you're using a government cloud tenant (US Government, US Government DOD, or China), make sure to select the appropriate **Microsoft Graph API Base URL** in your Microsoft credentials configuration.

## Events <a id="events"></a>

- **New Channel**
- **New Channel Message**
- **New Chat**
- **New Chat Message**
- **New Team Member**

## Related resources <a id="related-resources"></a>

n8n provides an app node for Microsoft Teams. You can find the node docs [here](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams).

View [example workflows and related content](https://n8n.io/integrations/microsoft-teams-trigger/) on n8n's website.

Refer to the [Microsoft Teams documentation](https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview?view=graph-rest-1.0) for details about their API.
