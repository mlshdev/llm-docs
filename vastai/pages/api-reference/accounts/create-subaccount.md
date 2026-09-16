> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/users](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23post%20/api/v0/users)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/create-subaccount

# create subaccount

`POST /api/v0/users`

Creates either a standalone user account or a subaccount under a parent account. Subaccounts can be restricted to host-only functionality.

CLI Usage: `vastai create subaccount --email <email> --username <username> --password <password> [--type host]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `email` (required; string; maximum length: `64`; pattern: `^(?!.*@vast)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`): User's email address
      - Example: `user@example.com`
    - `username` (required; string; maximum length: `64`): Desired username
      - Example: `testuser123`
    - `password` (required; string; maximum length: `256`): Account password
      - Example: `securepass123`
    - `host_only` (boolean): If true, account is restricted to host functionality only
      - Example: `true`
    - `parent_id` (string): Parent account ID for subaccounts. Use "me" for current user.
      - Example: `me`
    - `ssh_key` (string; maximum length: `4096`): Optional SSH public key
    - `captcha` (string; maximum length: `8192`): Captcha token (required for non-subaccounts)

**Responses**

- `200`: Account created successfully
  - Media type: `application/json`
    - Schema (object)
      - Example: `{"id":12345,"username":"testuser","email":"user@example.com","key_id":67890}`
      - `id` (integer): User ID
      - `username` (string)
      - `email` (string)
      - `key_id` (integer): API key for the new account
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - Example: `{"error":"invalid_email","msg":"Email address not allowed"}`
      - `error` (string; enum: `invalid_email`, `invalid_request`, `missing_auth_value`)
      - `msg` (string)
- `403`: Forbidden - billing blacklisted
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `409`: User already exists
  - Media type: `application/json`
    - Schema (object)
      - Example: `{"error":"user_exists","msg":"user already exists."}`
      - `error` (string; enum: `user_exists`)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
