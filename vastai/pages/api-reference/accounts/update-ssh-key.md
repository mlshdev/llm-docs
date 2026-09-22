> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/ssh/{id}](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23put%20/api/v0/ssh/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/update-ssh-key

# update ssh key

`PUT /api/v0/ssh/{id}`

Updates the specified SSH key with the provided value.

CLI Usage: `vastai update ssh-key <id> <ssh_key>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the SSH key to update

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `ssh_key` (required; string): The new value for the SSH key
      - Example: `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3...`

**Responses**

- `200`: SSH key updated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `key` (object): The updated SSH key data
- `400`: Bad Request
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
