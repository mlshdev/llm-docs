> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/team/invite](https://docs.vast.ai/api-reference/team/invite-team-member)

# invite team member

`POST /api/v0/team/invite`

Sends an invitation email to the specified user to join the team with the given role.

CLI Usage: `vastai invite team-member --email <email> --role <role>`

**Request body**

**Responses**

- `200`: Invitation sent successfully
- `400`: Bad Request
- `403`: Forbidden - User not authenticated
- `404`: Team metadata not found
- `429`: Too Many Requests - Duplicate invitation
