> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/endptjobs](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23get%20/api/v0/endptjobs)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/show-endpoints

# show endpoints

`GET /api/v0/endptjobs`

Retrieve a list of endpoint jobs for the authenticated user.

CLI Usage: `vastai show endpoints`

**Authentication:** `BearerAuth`

**Responses**

- `200`: A list of endpoint jobs
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `results` (array)
        - `items` (object)
          - `id` (integer)
            - Example: `123`
          - `min_load` (number)
            - Example: `0`
          - `target_util` (number)
            - Example: `0.9`
          - `cold_mult` (number)
            - Example: `2.5`
          - `cold_workers` (integer)
            - Example: `5`
          - `max_workers` (integer)
            - Example: `20`
          - `endpoint_name` (string)
            - Example: `vLLM-Qwen3-8B`
          - `api_key` (string)
            - Example: `your_api_key_here`
          - `user_id` (integer)
            - Example: `456`
          - `created_at` (string; format: date-time)
            - Example: `2023-10-01T12:00:00Z`
          - `endpoint_state` (string)
            - Example: `active`
- `400`: Bad request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `No endpoints for user found`
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
        - Example: `API requests too frequent endpoint threshold=3.0`
