> Commit-pinned source for Runpod main: [api-reference/container-registry-auths/GET/containerregistryauth/containerRegistryAuthId.mdx](https://docs.runpod.io/api-reference/container-registry-auths/GET/containerregistryauth/containerRegistryAuthId)

# Find a container registry auth by ID

`GET /containerregistryauth/{containerRegistryAuthId}`

**Find a container registry auth by ID**

Returns a single container registry auth. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Parameters**

- `containerRegistryAuthId` (path, required): ID of container registry auth to return.

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Container registry auth not found.
