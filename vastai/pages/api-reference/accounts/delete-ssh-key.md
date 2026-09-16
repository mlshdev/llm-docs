> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/ssh/{id}](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23delete%20/api/v0/ssh/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/delete-ssh-key

# delete ssh key

`DELETE /api/v0/ssh/{id}`

Removes an SSH key from the authenticated user's account

CLI Usage: `vastai delete ssh-key <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer; format: int64): ID of the SSH key to delete

**Responses**

- `200`: SSH key successfully deleted
  - Media type: `application/json`
    - Schema (object)
      - `success` (required; boolean)
        - Example: `true`
    - Example: `{"success":true}`
- `400`: Invalid request or SSH key not found
  - Media type: `application/json`
    - Schema (object)
      - `success` (required; boolean)
        - Example: `false`
      - `error` (required; string)
        - Example: `no_ssh_key`
      - `msg` (required; string)
        - Example: `No ssh key provided`
    - Example `not_found`: `{"success":false,"error":"no_ssh_key","msg":"No ssh key provided"}`
    - Example `invalid`: `{"success":false,"error":"invalid_request","msg":"Invalid request parameters"}`
