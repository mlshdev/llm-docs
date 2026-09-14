> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/team](https://docs.vast.ai/api-reference/team/destroy-team)

# destroy team

`DELETE /api/v0/team`

Deletes a team and all associated data including API keys, rights, invitations, memberships and metadata. The team owner's master API key is converted to a normal client key.

CLI Usage: `vastai destroy team`

**Responses**

- `200`: Team successfully deleted
- `401`: Unauthorized - Invalid or missing API key
- `403`: Forbidden - Only the Team's Owner may delete the team
- `404`: Not Found - Team does not exist or user is not a team account
