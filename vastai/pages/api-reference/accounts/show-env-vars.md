> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/secrets](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v0/secrets)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/show-env-vars

# show env vars

`GET /api/v0/secrets`

Retrieve a list of environment variables (secrets) for the authenticated user.

CLI Usage: `vastai show env-vars [-s]`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response with user secrets
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `secrets` (object)
        - `additional properties` (string)
          - Example: `*****`
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
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=5.0`
