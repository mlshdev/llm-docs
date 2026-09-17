> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/command/{id}](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23put%20/api/v0/instances/command/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/execute

# execute

`PUT /api/v0/instances/command/{id}`

Executes a constrained remote command on a specified instance.
The command output can be retrieved from the returned result URL.

CLI Usage: `vastai execute <instance_id> <command>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to execute command on

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `command` (required; string; maximum length: `512`): Command to execute on the instance
      - Example: `ls -l`

**Responses**

- `200`: Command queued successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `writeable_path` (string): Container writeable path
        - Example: `/workspace`
      - `result_url` (string): URL to fetch command execution results
        - Example: `https://s3.amazonaws.com/vast.ai/instance_logs/abc123.log`
      - `msg` (string)
        - Example: `Command is executing, wait a few seconds and then view the result_url`
- `400`: Invalid request parameters
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_args`, `invalid_container_id`, `invalid_container`)
      - `msg` (string)
        - Example: `Invalid command given.`
- `401`: Unauthorized - Invalid or missing API key
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden - User is blacklisted
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
        - Example: `API requests too frequent endpoint threshold=1.5`
- `483`: Invalid JSON body
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Invalid json_body`
