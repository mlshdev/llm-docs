> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/volumes](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23put%20/api/v0/volumes)
> Canonical documentation: https://docs.vast.ai/api-reference/volumes/rent-volume

# rent volume

`PUT /api/v0/volumes`

Rent/create a new volume with specified parameters.

CLI Usage: `vastai create volume <id> --size <size_gb>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer): ID for the volume
      - Example: `420`
    - `size` (integer): Size in GB (Defaults to 15)
      - Example: `15`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `volume_name` (string): Name of the created/resized volume
        - Example: `V.20118481`
