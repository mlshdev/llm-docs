> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/deployment/{id}/start](https://github.com/vast-ai/docs/blob/2b2d9a04e7cb542f3305c0c148c2395b0cfab86e/api-reference/openapi.yaml%23post%20/api/v0/deployment/%7Bid%7D/start)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/start-deployment

# start deployment

`POST /api/v0/deployment/{id}/start`

Starts (or restarts) the endpoint associated with a deployment. The autoscaler will begin recruiting workers according to the scaling policy.

CLI Usage: `vastai start deployment <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Deployment ID
  - Example: `644`

**Responses**

- `200`: Deployment started successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `endpoint_state` (string)
        - Example: `active`
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
