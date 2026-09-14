> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/commands/copy_direct](https://docs.vast.ai/api-reference/instances/cancel-copy)

# cancel copy

`DELETE /api/v0/commands/copy_direct`

Cancel a remote copy operation specified by the destination ID (dst_id).

CLI Usage: `vastai cancel copy --dst_id <destination_id>`

**Request body**

**Responses**

- `200`: Remote copy canceled successfully.
- `400`: Invalid arguments provided.
- `404`: Destination ID not found or access denied.
