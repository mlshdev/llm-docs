> Pinned source for Runpod main: [api-reference/network-volumes/POST/networkvolumes/networkVolumeId/update.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/api-reference/network-volumes/POST/networkvolumes/networkVolumeId/update.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/network-volumes/POST/networkvolumes/networkVolumeId/update

# Update a network volume

`POST /networkvolumes/{networkVolumeId}/update`

**Update a network volume**

Update a network volume - synonym for PATCH /networkvolumes/{networkVolumeId}. Review parameters and responses for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `networkVolumeId` (path; required; string): ID of network volume that needs to be updated.

**Request body** (required): Update a network volume.

- Media type: `application/json`
  - Schema (object)
    - `name` (string): A user-defined name for the network volume. The name does not need to be unique.
      - Example: `my network volume`
    - `size` (integer; minimum: `0`; maximum: `4000`): The amount of disk space, in gigabytes (GB), which will be allocated to the network volume after the update. Must be greater than the current size of the network volume.
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
