> Pinned source for Runpod main: [api-reference/network-volumes/POST/networkvolumes.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/api-reference/network-volumes/POST/networkvolumes.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/network-volumes/POST/networkvolumes

# Create a new network volume

`POST /networkvolumes`

**Create a new network volume**

Create a new network volume. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Request body** (required): Create a new network volume.

- Media type: `application/json`
  - Schema (object)
    - `dataCenterId` (required; string): The Runpod data center ID where the created network volume is located.
      - Example: `EU-RO-1`
    - `name` (required; string): A user-defined name for the created network volume. The name does not need to be unique.
      - Example: `my network volume`
    - `size` (required; integer; minimum: `0`; maximum: `4000`): The amount of disk space, in gigabytes (GB), allocated to the created network volume.
      - Example: `50`

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (object)
      - `dataCenterId` (string): The Runpod data center ID where a network volume is located.
        - Example: `EU-RO-1`
      - `id` (string): A unique string identifying a network volume.
        - Example: `agv6w2qcg7`
      - `name` (string): A user-defined name for a network volume. The name does not need to be unique.
        - Example: `my network volume`
      - `size` (integer): The amount of disk space, in gigabytes (GB), allocated to a network volume.
        - Example: `50`
- `400`: Invalid input.
