> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /get_workergroup_workers](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23post%20/get_workergroup_workers)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/get-workergroup-workers

# get workergroup workers

`POST /get_workergroup_workers`

Retrieves the current list and status of workers for a specific workergroup.
Useful for monitoring, debugging connectivity issues, and understanding resource usage within a workergroup.

CLI Usage: `vastai get workergroup workers <id>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `id` (required; integer; default: `12345`; minimum: `1`): ID of the workergroup to monitor
      - Example: `12345`

**Responses**

- `200`: Workers successfully retrieved.
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `workers` (array): List of workers in this workergroup
            - `items` (object)
              - `id` (integer): Workergroup instance ID
                - Example: `67890`
              - `status` (string): Current worker status
                - Example: `running`
              - `url` (string): Worker instance URL
                - Example: `http://192.168.1.10:8000`
              - `created_at` (string): When the worker was created
                - Example: `2023-10-01T12:00:00Z`
        - `variant 2` (string): Error message when workergroup not found or authentication fails
          - Example: `authenticate_workergroup_apikey: invalid api_key or workergroup 12345 not found`
