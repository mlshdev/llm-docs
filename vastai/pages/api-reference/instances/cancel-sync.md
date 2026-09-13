> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/commands/rclone](https://docs.vast.ai/api-reference/instances/cancel-sync)

# cancel sync

`DELETE /api/v0/commands/rclone`

Cancels an in-progress remote sync operation identified by the destination instance ID.
This operation cannot be resumed once canceled and must be restarted if needed.

CLI Usage: `vastai cancel sync --dst_id <destination_id>`

**Request body**

**Responses**

- `200`: Sync operation canceled successfully.
- `400`: Invalid request due to missing or incorrect parameters.
- `404`: Instance not found.
