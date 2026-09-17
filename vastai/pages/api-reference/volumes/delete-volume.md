> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/volumes](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23delete%20/api/v0/volumes)
> Canonical documentation: https://docs.vast.ai/api-reference/volumes/delete-volume

# delete volume

`DELETE /api/v0/volumes`

Delete a volume by its ID.

CLI Usage: `vastai delete volume <volume_id>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer): ID of the volume to delete
      - Example: `100`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_args`)
      - `msg` (string)
        - Example: `Please provide a valid volume ID.`
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `no_such_volume`)
      - `msg` (string)
        - Example: `Volume with that ID does not exist.`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=5.5`
