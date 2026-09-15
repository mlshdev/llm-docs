> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/users/current](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23get%20/api/v0/users/current)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/show-user

# show user

`GET /api/v0/users/current`

Retrieve information about the current authenticated user, excluding the API key.

CLI Usage: `vastai show user`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response with user information
  - Media type: `application/json`
    - Schema (object)
      - `id` (integer): The unique identifier of the user.
      - `key_id` (integer): The API key ID associated with the user.
      - `email` (string): The email address of the user.
      - `balance` (number; format: float): The current balance of the user.
      - `ssh_key` (string): The SSH key associated with the user.
      - `sid` (string): Server ID.
- `401`: Unauthorized access due to invalid or missing authentication token.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `500`: Internal Server Error
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
