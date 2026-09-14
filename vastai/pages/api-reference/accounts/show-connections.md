> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/cloud_integrations](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23get%20/api/v0/users/cloud_integrations)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/show-connections

# show connections

`GET /api/v0/users/cloud_integrations`

Retrieves the list of cloud connections associated with the authenticated user.

CLI Usage: `vastai show connections`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `id` (integer): Unique identifier for the cloud connection.
        - `cloud_type` (string): Type of cloud service.
        - `name` (string): User-given name for the cloud connection.
- `401`: Unauthorized - Invalid or missing authentication
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.9`
