> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/volumes/unlist](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23post%20/api/v0/volumes/unlist)
> Canonical documentation: https://docs.vast.ai/api-reference/volumes/unlist-volume

# unlist volume

`POST /api/v0/volumes/unlist`

Remove a volume listing from the marketplace.

CLI Usage: `vastai unlist volume <volume_id>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer): ID of the volume listing to unlist
      - Example: `2029`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string): Success message
        - Example: `Unlisted Volume 2029.`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `msg` (string; enum: `You must pass in \`id\` in the body of the request`, `Volume listing does not exist`, `Unable to delete active volume listing`, `Unable to delete volume listing.\`)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=5.0`
