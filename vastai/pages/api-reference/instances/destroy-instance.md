> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/instances/{id}](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23delete%20/api/v0/instances/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/destroy-instance

# destroy instance

`DELETE /api/v0/instances/{id}`

Destroys/deletes an instance permanently. This is irreversible and will delete all data.

CLI Usage: `vastai destroy instance <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to destroy
  - Example: `4242`

**Responses**

- `200`: Instance destroyed successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean): Whether the destruction was successful
        - Example: `true`
      - `msg` (string): Optional status message
        - Example: `Instance destroyed successfully`
- `400`: Bad request - invalid instance ID
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `invalid instance_id`
- `404`: Instance not found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `not_found`
      - `msg` (string)
        - Example: `Instance not found`
- `429`: Too many requests
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `rate_limit_exceeded`
      - `msg` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
