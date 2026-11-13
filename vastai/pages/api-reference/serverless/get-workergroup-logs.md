> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /get_workergroup_logs](https://github.com/vast-ai/docs/blob/349512480817168ffb72a144bed96c2678228c5c/api-reference/openapi.yaml%23post%20/get_workergroup_logs)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/get-workergroup-logs

# get workergroup logs

`POST /get_workergroup_logs`

Retrieves logs for a specific workergroup by ID.

The response contains one string per log level. Each level keeps up to about 16 MB of recent history; use `tail` to choose how much of it to return.

CLI Usage: `vastai get wrkgrp-logs <id> [--level <0-3>] [--tail <bytes>]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer; default: `12345`; minimum: `1`): ID of the workergroup
      - Example: `12345`
    - `tail` (integer; default: `10000`; minimum: `1`): Number of bytes to return from the end of each log
      - Example: `100000`

**Responses**

- `200`: Logs successfully retrieved.
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `info0` (string): User log, shown as **User** in the console. Worker creation, starts, stops, state changes with their reasons, worker errors, and PyWorker stack traces.
            - Example: `Worker 67890: model_loading -> idle (received loadtime)`
          - `info1` (string): Info-level engine log, shown as **Info** in the console. Includes the user log plus additional scaling details.
          - `debug` (string): Debug-level engine log
          - `trace` (string): Trace-level engine log, the most detailed level
        - `variant 2` (object)
          - `error_msg` (string): Returned when the workergroup does not exist or the API key does not own it
            - Example: `autogroup 12345 not found or unauthorized`
