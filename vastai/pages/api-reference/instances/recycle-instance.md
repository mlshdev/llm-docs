> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/recycle/{id}](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23put%20/api/v0/instances/recycle/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/recycle-instance

# recycle instance

`PUT /api/v0/instances/recycle/{id}`

Destroys and recreates container in place (from newly pulled image) without losing GPU priority.
Updates container status to 'recycling' and executes docker stop/remove commands on the host machine.

CLI Usage: `vastai recycle instance <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to recycle
  - Example: `1234`

**Responses**

- `200`: Instance recycle initiated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `400`: Bad Request - Invalid instance ID
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_id`)
      - `msg` (string)
        - Example: `Invalid instance id.`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=1.0`
