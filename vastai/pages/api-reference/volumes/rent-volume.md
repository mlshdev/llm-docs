> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/volumes](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23put%20/api/v0/volumes)
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
