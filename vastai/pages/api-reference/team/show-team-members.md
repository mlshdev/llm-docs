> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/team/members](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23get%20/api/v0/team/members)
> Canonical documentation: https://docs.vast.ai/api-reference/team/show-team-members

# show team members

`GET /api/v0/team/members`

Retrieve a list of team members associated with the authenticated user's team.

CLI Usage: `vastai show team-members`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `id` (integer): User ID
          - Example: `123`
        - `username` (string): Username of the team member
          - Example: `johndoe`
        - `email` (string): Email of the team member
          - Example: `johndoe@example.com`
        - `fullname` (string): Full name of the team member
          - Example: `John Doe`
        - `roles` (array): Roles assigned to the team member
          - Example: `["admin","member"]`
          - `items` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
