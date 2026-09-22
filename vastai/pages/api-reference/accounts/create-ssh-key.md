> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/ssh](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23post%20/api/v0/ssh)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/create-ssh-key

# create ssh-key

`POST /api/v0/ssh`

Creates a new SSH key and associates it with your account.
The key will be automatically added to all your current instances.

CLI Usage: `vastai create ssh-key <ssh_key>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `ssh_key` (required; string): The public SSH key to add (from .pub file)
      - Example: `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC...`

**Responses**

- `200`: SSH key created successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `key` (object)
        - `id` (integer): The ID of the created SSH key
          - Example: `123`
        - `user_id` (integer): The user ID who owns the key
          - Example: `456`
        - `public_key` (string): The public SSH key content
          - Example: `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC...`
        - `created_at` (string; format: date-time)
          - Example: `2023-01-01T12:00:00Z`
        - `deleted_at` (format: date-time; nullable)
          - Example: `null`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `no_ssh_key`)
      - `msg` (string)
        - Example: `No ssh key provided`
- `401`: Unauthorized
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
