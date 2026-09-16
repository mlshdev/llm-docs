> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/secrets](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23delete%20/api/v0/secrets)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/delete-env-var

# delete env var

`DELETE /api/v0/secrets`

Deletes an environment variable associated with the authenticated user.
The variable must exist and belong to the requesting user.

CLI Usage: `vastai delete env-var <name>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `key` (required; string): Name of the environment variable to delete
      - Example: `MY_API_KEY`

**Responses**

- `200`: Environment variable deleted successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Operation completed successfully`
- `400`: Bad request - missing or invalid input
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
          - `success` (boolean)
            - Example: `false`
          - `error` (string)
          - `msg` (string)
        - `variant 2` (object)
          - `error` (string; enum: `missing_input`, `nonexistent_key`)
            - Example: `missing_input`
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
- `429`: Too many requests - rate limit exceeded
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
