> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/ssh](https://docs.vast.ai/api-reference/accounts/create-ssh-key)

# create ssh-key

`POST /api/v0/ssh`

Creates a new SSH key and associates it with your account.
The key will be automatically added to all your current instances.

CLI Usage: `vastai create ssh-key <ssh_key>`

**Request body**

**Responses**

- `200`: SSH key created successfully
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
