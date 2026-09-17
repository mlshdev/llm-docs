> Pinned source for Runpod main: [api-reference/container-registry-auths/GET/containerregistryauth/containerRegistryAuthId.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/api-reference/container-registry-auths/GET/containerregistryauth/containerRegistryAuthId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/container-registry-auths/GET/containerregistryauth/containerRegistryAuthId

# Find a container registry auth by ID

`GET /containerregistryauth/{containerRegistryAuthId}`

**Find a container registry auth by ID**

Returns a single container registry auth. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Parameters**

- `containerRegistryAuthId` (path; required; string): ID of container registry auth to return.

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): A unique string identifying a container registry authentication.
        - Example: `clzdaifot0001l90809257ynb`
      - `name` (string): A user-defined name for a container registry authentication. The name must be unique.
        - Example: `my creds`
- `400`: Invalid ID supplied.
- `404`: Container registry auth not found.
