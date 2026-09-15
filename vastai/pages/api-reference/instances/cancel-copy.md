> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/commands/copy_direct](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23delete%20/api/v0/commands/copy_direct)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/cancel-copy

# cancel copy

`DELETE /api/v0/commands/copy_direct`

Cancel a remote copy operation specified by the destination ID (dst\_id).

CLI Usage: `vastai cancel copy --dst_id <destination_id>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `dst_id` (required; string): ID of the copy instance target to cancel.

**Responses**

- `200`: Remote copy canceled successfully.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `400`: Invalid arguments provided.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Invalid dst_id.`
- `404`: Destination ID not found or access denied.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `no_such_user`
      - `msg` (string)
        - Example: `No such user.`
