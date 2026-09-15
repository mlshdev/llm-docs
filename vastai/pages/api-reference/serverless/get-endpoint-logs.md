> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /get_endpoint_logs](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23post%20/get_endpoint_logs)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/get-endpoint-logs

# get endpoint logs

`POST /get_endpoint_logs`

Retrieves logs for a specific endpoint by name.

CLI Usage: `vastai get endpoint logs <endpoint_name> [--tail <num_lines>]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `endpoint` (required; string): Name of the endpoint
      - Example: `vLLM-Qwen3-8B`
    - `tail` (integer; default: `10000`): Number of log lines to retrieve from the end
      - Example: `1000`

**Responses**

- `200`: Successfully retrieved endpoint logs.
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `logs` (string): The endpoint logs
            - Example: `2023-10-01 12:00:00 - Worker started 2023-10-01 12:01:00 - Request processed`
        - `variant 2` (string): Error message when endpoint not found or authentication fails
          - Example: `authenticate_endpoint_apikey: invalid api_key or endpoint vLLM-Qwen3-8B not found`
