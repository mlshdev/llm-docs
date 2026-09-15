> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/reboot/{id}](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23put%20/api/v0/instances/reboot/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/reboot-instance

# reboot instance

`PUT /api/v0/instances/reboot/{id}`

Stops and starts a container without losing GPU priority. Updates container status to 'rebooting' and executes docker stop/start commands on the host machine.

CLI Usage: `vastai reboot instance <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to reboot
  - Example: `1234`

**Responses**

- `200`: Instance reboot initiated successfully
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
        - Example: `invalid instance_id`
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
