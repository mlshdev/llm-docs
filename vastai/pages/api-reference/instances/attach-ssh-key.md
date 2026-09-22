> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/instances/{id}/ssh](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23post%20/api/v0/instances/%7Bid%7D/ssh)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/attach-ssh-key

# attach ssh-key

`POST /api/v0/instances/{id}/ssh`

Attaches an SSH key to the specified instance, allowing SSH access using the provided key.

CLI Usage: `vastai attach ssh <instance_id> <ssh_key>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to attach the SSH key to

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `ssh_key` (string; minimum length: `1`): The SSH key to attach to the instance
      - Example: `ssh-rsa AAAAB3NzaC1yc2EAAA...`

**Responses**

- `200`: SSH key attached successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `SSH key attached successfully`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
