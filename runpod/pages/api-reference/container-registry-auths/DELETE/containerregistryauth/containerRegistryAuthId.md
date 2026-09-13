> Commit-pinned source for Runpod main: [api-reference/container-registry-auths/DELETE/containerregistryauth/containerRegistryAuthId.mdx](https://docs.runpod.io/api-reference/container-registry-auths/DELETE/containerregistryauth/containerRegistryAuthId)

# Delete a container registry auth

`DELETE /containerregistryauth/{containerRegistryAuthId}`

**Delete a container registry auth**

Delete a container registry auth. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Parameters**

- `containerRegistryAuthId` (path, required): Container registry auth ID to delete.

**Responses**

- `204`: Container registry auth successfully deleted.
- `400`: Invalid container registry auth ID.
- `401`: Unauthorized.
