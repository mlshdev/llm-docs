> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/{id}](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23put%20/api/v0/instances/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/manage-instance

# manage instance

`PUT /api/v0/instances/{id}`

Manage instance state and labels. The operation is determined by the request body parameters.

CLI Usage:

- To stop: `vastai stop instance <id>`
- To start: `vastai start instance <id>`
- To label: `vastai label instance <id> <label>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to modify
  - Example: `1234`

**Request body** (required)

- Media type: `application/json`
  - Schema (object): At least one of these parameters should be provided
    - `state` (string; enum: `stopped`, `running`): Change instance state (optional)
      - Example: `stopped`
    - `label` (string; maximum length: `1024`): Text label to assign to the instance (optional)
      - Example: `My ML Training Job`

**Responses**

- `200`: Operation completed successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Not Found
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
