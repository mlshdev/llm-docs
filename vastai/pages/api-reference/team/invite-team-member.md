> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/team/invite](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23post%20/api/v0/team/invite)
> Canonical documentation: https://docs.vast.ai/api-reference/team/invite-team-member

# invite team member

`POST /api/v0/team/invite`

Sends an invitation email to the specified user to join the team with the given role.

CLI Usage: `vastai invite team-member --email <email> --role <role>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `email` (required; string; format: email): Email address of the user to invite
      - Example: `user@example.com`
    - `role` (required; string): Role to assign to the new team member
      - Example: `developer`

**Responses**

- `200`: Invitation sent successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `New invitation sent to ${email}`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string; enum: `User is a not a team member`, `User cannot be invited to their own team.`, `User is already a member of this team.`)
- `403`: Forbidden - User not authenticated
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Team metadata not found
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `Team metadata not found`
- `429`: Too Many Requests - Duplicate invitation
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `Error: invitation already sent to user@example.com only 300 seconds ago.`
