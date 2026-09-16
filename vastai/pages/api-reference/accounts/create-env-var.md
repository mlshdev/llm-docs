> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/secrets](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23post%20/api/v0/secrets)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/create-env-var

# create env-var

`POST /api/v0/secrets`

Creates a new encrypted environment variable for the authenticated user.
Keys are automatically converted to uppercase. Values are encrypted before storage.
There is a limit on the total number of environment variables per user.

CLI Usage: `vastai create env-var <key> <value>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `key` (required; string): Environment variable key name (will be converted to uppercase)
      - Example: `API_TOKEN`
    - `value` (required; string; pattern: `^[a-zA-Z0-9_\-\.]+$`): Secret value to be encrypted and stored
      - Example: `abc123xyz`

**Responses**

- `200`: Environment variable created successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Environment variable added successfully`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `missing_input`, `max_secrets`, `existing_key`)
      - `msg` (string)
        - Example: `Both 'key' and 'value' are required.`
- `401`: Unauthorized - Invalid or missing API key
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden - User is blacklisted
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
