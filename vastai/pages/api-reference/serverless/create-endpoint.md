> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/endptjobs](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23post%20/api/v0/endptjobs)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/create-endpoint

# create endpoint

`POST /api/v0/endptjobs`

This endpoint creates a new job processing endpoint with specified parameters.

CLI Usage: `vastai create endpoint [options]`

**Authentication:** `BearerAuth`

**Request body**

- Media type: `application/json`
  - Schema (object)
    - `min_load` (number; default: `10`): Minimum load for the endpoint.
      - Example: `50`
    - `target_util` (number; default: `0.9`): Target utilization for the endpoint.
      - Example: `0.75`
    - `cold_mult` (number; default: `2.5`): Multiplier for cold start.
      - Example: `2`
    - `cold_workers` (integer; default: `5`): Number of cold workers.
      - Example: `5`
    - `max_workers` (integer; default: `20`): Maximum number of workers.
      - Example: `20`
    - `endpoint_name` (string; default: `default-endpoint`): Name of the endpoint.
      - Example: `my_endpoint`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `result` (integer): The ID of the created endpoint
        - Example: `12345`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema
      - allOf:
        - `variant 1` (object)
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
- `403`: Forbidden
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
        - Example: `API requests too frequent endpoint threshold=4.0`
