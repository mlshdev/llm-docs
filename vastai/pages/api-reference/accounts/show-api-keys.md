> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/auth/apikeys](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23get%20/api/v0/auth/apikeys)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/show-api-keys

# show api keys

`GET /api/v0/auth/apikeys`

Retrieves all API keys associated with the authenticated user.

CLI Usage: `vastai show api-keys`

**Authentication:** `BearerAuth`

**Responses**

- `200`: API keys successfully retrieved
  - Media type: `application/json`
    - Schema (object)
      - `apikeys` (array)
        - `items` (object)
          - `id` (integer)
            - Example: `123`
          - `user_id` (integer)
            - Example: `456`
          - `rights` (string)
            - Example: `read`
          - `team_id` (integer)
            - Example: `789`
          - `team_name` (string)
            - Example: `Team Alpha`
- `400`: Bad Request - API Key not provided or not found
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `API Key not provided as bearer token.`
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
        - Example: `API requests too frequent endpoint threshold=1.0`
