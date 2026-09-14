> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /get_endpoint_workers](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23post%20/get_endpoint_workers)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/get-endpoint-workers

# get endpoint workers

`POST /get_endpoint_workers`

Retrieves the current list and status of workers for a specific endpoint.
Useful for monitoring, debugging connectivity issues, and understanding resource usage.

CLI Usage: `vastai get endpoint workers <id>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer; default: `12345`; minimum: `1`): ID of the endpoint to monitor
      - Example: `12345`

**Responses**

- `200`: Successfully retrieved endpoints workers.
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `workers` (array): List of workers for this endpoint
            - `items` (object)
              - `id` (integer): Worker instance ID
                - Example: `67890`
              - `status` (string): Current worker status
                - Example: `running`
              - `url` (string): Worker instance URL
                - Example: `http://192.168.1.10:8000`
              - `created_at` (string): When the worker was created
                - Example: `2023-10-01T12:00:00Z`
        - `variant 2` (string): Error message when endpoint not found or authentication fails
          - Example: `authenticate_endpoint_apikey: invalid api_key or endpoint vLLM-Qwen3-8B not found`
