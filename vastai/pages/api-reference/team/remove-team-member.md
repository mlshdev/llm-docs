> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/team/members/{id}](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23delete%20/api/v0/team/members/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/team/remove-team-member

# remove team member

`DELETE /api/v0/team/members/{id}`

Removes a member from the team by revoking their team-related API keys and updating membership status. Cannot remove the team owner.

CLI Usage: `vastai remove team-member <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): User ID of the team member to remove
  - Example: `12345`

**Responses**

- `200`: Member removed successfully
  - Media type: `application/json`
    - Schema (object)
      - `status` (string; enum: `success`)
        - Example: `success`
      - `message` (string)
        - Example: `User removed from the team.`
- `400`: Bad request - cannot remove team owner
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `Cannot remove the team owner from the team`
- `401`: Unauthorized - invalid or missing API key
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `unauthorized`
      - `msg` (string)
        - Example: `Invalid or missing API key`
- `403`: Forbidden - user is blacklisted
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `forbidden`
      - `msg` (string)
        - Example: `User is blacklisted`
- `404`: Member not found or already removed
  - Media type: `application/json`
    - Schema (object)
      - `status` (string; enum: `failure`)
        - Example: `failure`
      - `message` (string)
        - Example: `No user was removed from the team.`
- `429`: Too many requests
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `rate_limit_exceeded`
      - `msg` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
