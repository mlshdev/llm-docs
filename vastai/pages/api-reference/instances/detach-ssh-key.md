> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/instances/{id}/ssh/{ssh_key_id}](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23delete%20/api/v0/instances/%7Bid%7D/ssh/%7Bssh_key_id%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/detach-ssh-key

# detach ssh-key

`DELETE /api/v0/instances/{id}/ssh/{ssh_key_id}`

Detaches an SSH key from a specified instance, removing SSH access for that key.

CLI Usage: `vastai detach <instance_id> <ssh_key_id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to detach the SSH key from
- `ssh_key_id` (path; required; integer): Numeric ID of the SSH key to detach. Obtainable via `show ssh-keys` command

**Responses**

- `200`: SSH key successfully detached
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `SSH key removed from instance.`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_request`)
      - `msg` (string)
        - Example: `Invalid request parameters`
- `404`: Instance or SSH key not found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `no_such_instance`, `no_such_ssh_key`)
      - `msg` (string)
        - Example: `Instance not found.`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.0`
- `500`: Internal Server Error
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `delete_ssh_from_instance`
      - `msg` (string)
        - Example: `Error deleting SSH key from instance`
