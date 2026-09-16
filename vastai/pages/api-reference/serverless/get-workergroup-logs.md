> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /get_workergroup_logs](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23post%20/get_workergroup_logs)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/get-workergroup-logs

# get workergroup logs

`POST /get_workergroup_logs`

Retrieves logs for a specific workergroup by ID.

CLI Usage: `vastai get workergroup logs <id> [--tail <num_lines>]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer; default: `12345`; minimum: `1`): ID of the worker group
      - Example: `12345`
    - `tail` (integer; default: `10000`; minimum: `1`): Number of log lines to retrieve from the end
      - Example: `1000`

**Responses**

- `200`: Logs successfully retrieved.
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `logs` (string): The workergroup logs
            - Example: `2023-10-01 12:00:00 - Workergroup started 2023-10-01 12:01:00 - Instance scaled up`
        - `variant 2` (string): Error message when workergroup not found or authentication fails
          - Example: `authenticate_workergroup_apikey: invalid api_key or workergroup 12345 not found`
