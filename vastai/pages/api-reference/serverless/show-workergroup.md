> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/workergroups](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v0/workergroups)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/show-workergroup

# show workergroup

`GET /api/v0/workergroups`

Retrieves the list of workergroups associated with the authenticated user.

CLI Usage: `vastai show workergroups`

**Authentication:** `BearerAuth`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `results` (array)
        - `items` (object)
          - `id` (integer)
            - Example: `123`
          - `min_load` (number)
            - Example: `1`
          - `target_util` (number)
            - Example: `0.9`
          - `cold_mult` (number)
            - Example: `3`
          - `test_workers` (integer)
            - Example: `3`
          - `template_hash` (string)
            - Example: `abc123def456`
          - `template_id` (integer)
            - Example: `456`
          - `search_query` (object): Parsed search parameters as JSON object
            - Example: `verified=true rentable=true rented=false`
          - `launch_args` (string)
            - Example: `--env VAR=value`
          - `gpu_ram` (number)
            - Example: `24`
          - `endpoint_name` (string)
            - Example: `my_endpoint`
          - `endpoint_id` (integer)
            - Example: `789`
          - `api_key` (string)
            - Example: `your_api_key_here`
          - `created_at` (string; format: date-time)
            - Example: `2023-10-01T12:00:00Z`
          - `user_id` (integer)
            - Example: `456`
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
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.0`
