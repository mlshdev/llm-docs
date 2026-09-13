> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/commands/rclone](https://docs.vast.ai/api-reference/instances/cloud-copy)

# cloud copy

`POST /api/v0/commands/rclone`

Starts a cloud copy operation by sending a command to the remote server. The operation can transfer data between an instance and a cloud service.

CLI Usage: `vastai cloud copy <instance_id> <src> <dst> [options]`

**Request body**

**Responses**

- `200`: Cloud copy operation initiated successfully.
- `400`: Bad request due to invalid parameters or cloud service.
