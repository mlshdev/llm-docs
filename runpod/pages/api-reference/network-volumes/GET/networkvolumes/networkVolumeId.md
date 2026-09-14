> Commit-pinned source for Runpod main: [api-reference/network-volumes/GET/networkvolumes/networkVolumeId.mdx](https://docs.runpod.io/api-reference/network-volumes/GET/networkvolumes/networkVolumeId)

# Find a network volume by ID

`GET /networkvolumes/{networkVolumeId}`

**Find a network volume by ID**

Returns a single network volume. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Parameters**

- `networkVolumeId` (path, required): ID of network volume to return.

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Network volume not found.
