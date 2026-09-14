> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/team](https://docs.vast.ai/api-reference/team/create-team)

# create team

`POST /api/v0/team`

Creates a new [team](https://docs.vast.ai/documentation/teams/teams-overview) with given name and following default roles:
- **Owner**: Full access to all team resources, settings, and member management. The team owner is the user who creates the team.
- **Manager**: All permissions of owner except team deletion.
- **Member**: Can view, create, and interact with instances, but cannot access billing, team management, autoscaler, or machines.

- The API key used to create the team becomes the team key and is used for all team operations (e.g., creating roles, deleting the team).
- You can optionally transfer credits from your personal account to the new team account using the `transfer_credit` field.

CLI Usage: `vastai create team --team_name <team_name> [--transfer_credit <amount>]`

**Request body**

**Responses**

- `200`: Team Successfully Created!
- `400`: Bad Request
- `401`: Unauthorized - Invalid or missing API key
