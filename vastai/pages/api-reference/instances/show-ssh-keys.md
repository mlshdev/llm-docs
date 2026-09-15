> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/instances/{id}/ssh](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23get%20/api/v0/instances/%7Bid%7D/ssh)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/show-ssh-keys

# show ssh-keys

`GET /api/v0/instances/{id}/ssh`

Retrieves the SSH keys associated with a specific instance.

CLI Usage: `vastai show ssh-keys <instance_id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): The ID of the instance to retrieve SSH keys for.
  - Example: `17816188`

**Responses**

- `200`: Success response with SSH keys
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `ssh_keys` (string): JSON string containing array of SSH key objects
        - Example: `[{"id": 1, "name": "my-key", "public_key": "ssh-rsa AAAA..."}]`
- `400`: Bad Request - Invalid instance ID
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `401`: Unauthorized - Invalid or missing authentication
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Instance not found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
