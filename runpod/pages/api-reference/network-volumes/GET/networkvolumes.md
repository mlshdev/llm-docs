> Pinned source for Runpod main: [api-reference/network-volumes/GET/networkvolumes.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/api-reference/network-volumes/GET/networkvolumes.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/network-volumes/GET/networkvolumes

# List network volumes

`GET /networkvolumes`

**List network volumes**

Returns a list of network volumes. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `id` (string): A unique string identifying a network volume.
          - Example: `agv6w2qcg7`
        - `name` (string): A user-defined name for a network volume. The name does not need to be unique.
          - Example: `my network volume`
        - `size` (integer): The amount of disk space, in gigabytes (GB), allocated to a network volume.
          - Example: `50`
        - `dataCenterId` (string): The Runpod data center ID where a network volume is located.
          - Example: `EU-RO-1`
- `400`: Invalid ID supplied.
- `404`: Network volume not found.
