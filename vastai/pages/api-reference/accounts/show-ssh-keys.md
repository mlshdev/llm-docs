> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/ssh](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23get%20/api/v0/ssh)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/show-ssh-keys

# show ssh keys

`GET /api/v0/ssh`

Retrieve a list of SSH keys associated with the authenticated user's account.

CLI Usage: `vastai show ssh-keys`

**Authentication:** `BearerAuth`

**Parameters**

- `Authorization` (header; required; string): Bearer token for user authentication.

**Responses**

- `200`: A list of SSH keys.
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `id` (integer): The unique identifier of the SSH key.
        - `user_id` (integer): The ID of the user to whom the SSH key belongs.
        - `key` (string): The SSH public key.
        - `created_at` (string; format: date-time): The timestamp when the SSH key was created.
        - `deleted_at` (format: date-time; nullable): The timestamp when the SSH key was deleted, if applicable.
- `401`: Unauthorized access due to invalid or missing authentication token.
- `404`: No SSH keys found for the user.
