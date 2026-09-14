> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/reboot/{id}](https://docs.vast.ai/api-reference/instances/reboot-instance)

# reboot instance

`PUT /api/v0/instances/reboot/{id}`

Stops and starts a container without losing GPU priority. Updates container status to 'rebooting' and executes docker stop/start commands on the host machine.

CLI Usage: `vastai reboot instance <id>`

**Parameters**

- `id` (path, required): ID of the instance to reboot

**Responses**

- `200`: Instance reboot initiated successfully
- `400`: Bad Request
- `401`: Unauthorized
- `429`: Too Many Requests
