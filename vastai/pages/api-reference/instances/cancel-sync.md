> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/commands/rclone](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23delete%20/api/v0/commands/rclone)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/cancel-sync

# cancel sync

`DELETE /api/v0/commands/rclone`

Cancels an in-progress remote sync operation identified by the destination instance ID.
This operation cannot be resumed once canceled and must be restarted if needed.

CLI Usage: `vastai cancel sync --dst_id <destination_id>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `dst_id` (required; integer): The destination instance ID of the sync operation to cancel.

**Responses**

- `200`: Sync operation canceled successfully.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Remote copy canceled - check instance status bar for progress updates (~30 seconds delayed).`
- `400`: Invalid request due to missing or incorrect parameters.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Invalid dst_id.`
- `404`: Instance not found.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `no_such_instance`
      - `msg` (string)
        - Example: `No such instance.`
