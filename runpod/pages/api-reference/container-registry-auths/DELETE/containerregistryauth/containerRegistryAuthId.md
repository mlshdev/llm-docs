> Pinned source for Runpod main: [api-reference/container-registry-auths/DELETE/containerregistryauth/containerRegistryAuthId.mdx](https://github.com/runpod/docs/blob/25ec0e5ebf1cdc72fae35ed21b489444a68e9cad/api-reference/container-registry-auths/DELETE/containerregistryauth/containerRegistryAuthId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/container-registry-auths/DELETE/containerregistryauth/containerRegistryAuthId

# Delete a container registry auth

`DELETE /containerregistryauth/{containerRegistryAuthId}`

**Delete a container registry auth**

Delete a container registry auth. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `containerRegistryAuthId` (path; required; string): Container registry auth ID to delete.

**Responses**

- `204`: Container registry auth successfully deleted.
- `400`: Invalid container registry auth ID.
- `401`: Unauthorized.
