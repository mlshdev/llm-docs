> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/team/members/{id}](https://docs.vast.ai/api-reference/team/remove-team-member)

# remove team member

`DELETE /api/v0/team/members/{id}`

Removes a member from the team by revoking their team-related API keys and updating membership status. Cannot remove the team owner.

CLI Usage: `vastai remove team-member <id>`

**Parameters**

- `id` (path, required): User ID of the team member to remove

**Responses**

- `200`: Member removed successfully
- `400`: Bad request - cannot remove team owner
- `401`: Unauthorized - invalid or missing API key
- `403`: Forbidden - user is blacklisted
- `404`: Member not found or already removed
- `429`: Too many requests
