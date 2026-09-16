> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/machines/create_bids](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23put%20/api/v0/machines/create_bids)
> Canonical documentation: https://docs.vast.ai/api-reference/machines/set-defjob

# set defjob

`PUT /api/v0/machines/create_bids`

Creates default jobs (background instances) for a specified machine with the given parameters.

CLI Usage: `vastai set defjob <machine_id> --price_gpu <price> --price_inetu <price> --price_inetd <price> --image <image> [--args <args>]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `machine` (required; integer): ID of the machine to create jobs for.
      - Example: `12345`
    - `price_gpu` (required; number; format: float): Price per GPU per day.
      - Example: `0.5`
    - `price_inetu` (required; number; format: float): Price for internet upload.
      - Example: `0.1`
    - `price_inetd` (required; number; format: float): Price for internet download.
      - Example: `0.1`
    - `image` (required; string): Docker image to use for the job.
      - Example: `vastai/tensorflow`
    - `args` (array): Arguments for the Docker image.
      - Example: `["--arg1","--arg2"]`
      - `items` (string)

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `machine_id` (integer)
        - Example: `12345`
      - `user_id` (integer)
        - Example: `67890`
      - `you_sent` (object): The original request JSON.
- `400`: Bad Request
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
        - Example: `API requests too frequent endpoint threshold=2.8`
