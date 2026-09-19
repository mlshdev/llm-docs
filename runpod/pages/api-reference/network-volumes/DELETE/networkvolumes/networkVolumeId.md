> Pinned source for Runpod main: [api-reference/network-volumes/DELETE/networkvolumes/networkVolumeId.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/api-reference/network-volumes/DELETE/networkvolumes/networkVolumeId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/network-volumes/DELETE/networkvolumes/networkVolumeId

# Delete a network volume

`DELETE /networkvolumes/{networkVolumeId}`

**Delete a network volume**

Delete a network volume. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `networkVolumeId` (path; required; string): Network volume ID to delete.

**Responses**

- `204`: Network volume successfully deleted.
- `400`: Invalid network volume ID.
- `401`: Unauthorized.
