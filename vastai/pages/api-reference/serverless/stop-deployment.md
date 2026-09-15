> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/deployment/{id}/stop](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23post%20/api/v0/deployment/%7Bid%7D/stop)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/stop-deployment

# stop deployment

`POST /api/v0/deployment/{id}/stop`

Stops the endpoint associated with a deployment. The deployment is not deleted and can be restarted with the start deployment endpoint.

CLI Usage: `vastai stop deployment <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Deployment ID
  - Example: `644`

**Responses**

- `200`: Deployment stopped successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `endpoint_state` (string)
        - Example: `stopped`
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
        - Example: `API requests too frequent endpoint threshold=2.0`
