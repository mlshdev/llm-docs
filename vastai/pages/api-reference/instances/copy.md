> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/commands/copy_direct](https://docs.vast.ai/api-reference/instances/copy)

# copy

`PUT /api/v0/commands/copy_direct`

Initiate a remote copy operation to transfer data from one instance to another or between an instance and the local machine.

CLI Usage: `vastai copy <src_id> <dst_id> <src_path> <dst_path>`

**Request body**

**Responses**

- `200`: Remote copy initiated successfully.
- `400`: Invalid arguments provided.
- `404`: Source or destination ID not found or access denied.
