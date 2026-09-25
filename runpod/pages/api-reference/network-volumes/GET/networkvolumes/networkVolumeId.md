> Pinned source for Runpod main: [api-reference/network-volumes/GET/networkvolumes/networkVolumeId.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/api-reference/network-volumes/GET/networkvolumes/networkVolumeId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/network-volumes/GET/networkvolumes/networkVolumeId

# Find a network volume by ID

`GET /networkvolumes/{networkVolumeId}`

**Find a network volume by ID**

Returns a single network volume. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `networkVolumeId` (path; required; string): ID of network volume to return.

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
- `400`: Invalid ID supplied.
- `404`: Network volume not found.
