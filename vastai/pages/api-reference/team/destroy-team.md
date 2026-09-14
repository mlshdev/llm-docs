> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/team](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23delete%20/api/v0/team)
> Canonical documentation: https://docs.vast.ai/api-reference/team/destroy-team

# destroy team

`DELETE /api/v0/team`

Deletes a team and all associated data including API keys, rights, invitations, memberships and metadata. The team owner's master API key is converted to a normal client key.

CLI Usage: `vastai destroy team`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Team successfully deleted
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Team Successfully Deleted!`
      - `pkey_id` (integer): ID of the user's team API key which was converted back to a client key.
        - Example: `12345`
- `401`: Unauthorized - Invalid or missing API key
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
    - Example: `{"success":false,"error":"auth_error","msg":"Invalid user key"}`
- `403`: Forbidden - Only the Team's Owner may delete the team
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
    - Example: `{"success":false,"error":"not_allowed","msg":"Only the Team's Owner may delete the team"}`
- `404`: Not Found - Team does not exist or user is not a team account
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
    - Example `not_a_team`: `{"success":false,"error":"not_found","msg":"Cannot Delete Team. User is not a team account"}`
    - Example `owner_not_found`: `{"success":false,"error":"not_found","msg":"Team owner not found"}`
