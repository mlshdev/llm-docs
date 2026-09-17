> Pinned source for Vast.ai main: [api-reference/openapi.yaml#get /api/v0/deployments](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/api-reference/openapi.yaml%23get%20/api/v0/deployments)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/show-deployments

# show deployments

`GET /api/v0/deployments`

Returns all deployments owned by the authenticated user.

CLI Usage: `vastai show deployments`

**Authentication:** `BearerAuth`

**Responses**

- `200`: A list of deployments
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `deployments` (array)
        - `items` (object)
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
          - `env` (nullable): Environment variables and port mappings
          - `file_hash` (nullable): Content hash of the deployed code
          - `s3_key` (nullable): S3 object key for the current code version
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
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
