> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/request_logs/{id}](https://docs.vast.ai/api-reference/instances/show-logs)

# show logs

`PUT /api/v0/instances/request_logs/{id}`

Request logs from a specific instance. The logs will be uploaded to S3 and can be retrieved from a generated URL. Supports both container logs and daemon system logs.

CLI Usage: `vastai show logs <instance_id> [--tail <lines>] [--filter <grep>] [--daemon-logs]`

**Parameters**

- `id` (path, required): ID of the instance to get logs from

**Request body**

**Responses**

- `200`: Success response with S3 URL for log retrieval
- `403`: Not authorized
- `404`: Instance not found
