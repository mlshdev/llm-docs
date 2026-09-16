> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/secrets](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23put%20/api/v0/secrets)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/update-env-var

# update env var

`PUT /api/v0/secrets`

Updates the value of an existing environment variable for the authenticated user.

CLI Usage: `vastai update env-var <key> <value>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `key` (required; string; pattern: `^[a-zA-Z_]\w*$`): The key of the environment variable to update (will be converted to uppercase)
      - Example: `MY_API_KEY`
    - `value` (required; string): The new value for the environment variable
      - Example: `xyz123`

**Responses**

- `200`: Environment variable updated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Environment variable updated successfully`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - allOf:
        - `variant 1` (object)
          - `success` (boolean)
            - Example: `false`
          - `error` (string)
          - `msg` (string)
      - `error` (string; enum: `missing_input`, `empty_input`, `input_too_long`, `invalid_characters`, `nonexistent_key`)
- `401`: Unauthorized
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
        - Example: `API requests too frequent endpoint threshold=3.0`
