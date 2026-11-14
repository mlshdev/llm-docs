> Pinned source for Runpod main: [api-reference/network-volumes/DELETE/networkvolumes/networkVolumeId.mdx](https://github.com/runpod/docs/blob/badc3b0885d17c76062faf033073f6d062af3aee/api-reference/network-volumes/DELETE/networkvolumes/networkVolumeId.mdx)
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
