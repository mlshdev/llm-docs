> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/request_logs/{id}](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23put%20/api/v0/instances/request_logs/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/show-logs

# show logs

`PUT /api/v0/instances/request_logs/{id}`

Request logs from a specific instance. The logs will be uploaded to S3 and can be retrieved from a generated URL. Supports both container logs and daemon system logs.

CLI Usage: `vastai show logs <instance_id> [--tail <lines>] [--filter <grep>] [--daemon-logs]`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the instance to get logs from

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `tail` (string): Number of lines to show from end of logs
      - Example: `1000`
    - `filter` (string): Grep filter to apply to log entries
    - `daemon_logs` (string; enum: `true`): If "true", fetch daemon system logs instead of container logs

**Responses**

- `200`: Success response with S3 URL for log retrieval
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `result_url` (string): S3 URL where logs can be downloaded
        - Example: `https://s3.amazonaws.com/vast.ai/instance_logs/{hash}.log`
      - `msg` (string): Status message
- `403`: Not authorized
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
        - Example: `not_authorized`
      - `msg` (string)
        - Example: `Not authorized to view logs for this instance`
- `404`: Instance not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
        - Example: `invalid_id`
      - `msg` (string)
        - Example: `Invalid instance id.`
