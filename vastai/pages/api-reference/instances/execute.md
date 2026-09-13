> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/command/{id}](https://docs.vast.ai/api-reference/instances/execute)

# execute

`PUT /api/v0/instances/command/{id}`

Executes a constrained remote command on a specified instance.
The command output can be retrieved from the returned result URL.

CLI Usage: `vastai execute <instance_id> <command>`

**Parameters**

- `id` (path, required): ID of the instance to execute command on

**Request body**

**Responses**

- `200`: Command queued successfully
- `400`: Invalid request parameters
- `401`: Unauthorized - Invalid or missing API key
- `403`: Forbidden - User is blacklisted
- `429`: Too Many Requests
- `483`: Invalid JSON body
