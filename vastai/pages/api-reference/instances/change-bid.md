> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/instances/bid_price/{id}](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23put%20/api/v0/instances/bid_price/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/change-bid

# change bid

`PUT /api/v0/instances/bid_price/{id}`

Change the current bid price of an instance to a specified price.

CLI Usage: `vastai change bid <id> --price <price>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): Instance ID

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `client_id` (required; string): Client identifier (usually "me")
      - Example: `me`
    - `price` (required; number; minimum: `0.001`; maximum: `32`): Bid price in $/hour
      - Example: `0.17`

**Responses**

- `200`: Success response
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
- `400`: Bad Request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `invalid_args`)
      - `msg` (string)
        - Example: `Please set a bid price >= 0.001.`
- `404`: Not Found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string; enum: `no_such_instance`)
      - `msg` (string)
        - Example: `Instance with that ID does not exist.`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=5.5`
