> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/deployment/{id}](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23get%20/api/v0/deployment/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/show-deployment

# show deployment

`GET /api/v0/deployment/{id}`

Returns detailed information about a single deployment, including endpoint state and worker count.

CLI Usage: `vastai show deployment <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Deployment ID
  - Example: `644`

**Responses**

- `200`: Deployment details
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `deployment` (object)
        - `id` (integer)
          - Example: `644`
        - `name` (string)
          - Example: `square`
        - `tag` (string)
          - Example: `default`
        - `image` (string)
          - Example: `vastai/base-image:latest`
        - `endpoint_id` (nullable)
          - Example: `25121`
        - `endpoint_state` (nullable): Current state of the endpoint
          - Example: `active`
        - `env` (nullable): Environment variables and port mappings
        - `s3_key` (nullable): S3 object key for the current code version
        - `file_hash` (nullable): Content hash of the deployed code
        - `search_params` (nullable): Search query for instance selection
        - `current_version_id` (nullable)
        - `last_healthy_version_id` (nullable)
        - `storage` (number)
          - Example: `16`
        - `ttl` (nullable)
        - `last_client_heartbeat` (nullable): Unix timestamp of last client heartbeat
        - `created_at` (number): Unix timestamp
        - `updated_at` (number): Unix timestamp
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Deployment not found
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
