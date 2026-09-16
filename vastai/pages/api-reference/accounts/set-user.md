> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/users](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23put%20/api/v0/users)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/set-user

# set user

`PUT /api/v0/users`

Updates the user data for the authenticated user.

CLI Usage: `vastai set user --file <file_path>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `normalized_email` (string): Normalized email address.
      - Example: `user@example.com`
    - `username` (string): Username of the user.
      - Example: `johndoe`
    - `fullname` (string): Full name of the user.
      - Example: `John Doe`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Operation completed successfully`
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
