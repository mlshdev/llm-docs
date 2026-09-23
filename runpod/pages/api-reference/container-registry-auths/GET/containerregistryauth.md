> Pinned source for Runpod main: [api-reference/container-registry-auths/GET/containerregistryauth.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/api-reference/container-registry-auths/GET/containerregistryauth.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/container-registry-auths/GET/containerregistryauth

# List container registry auths

`GET /containerregistryauth`

**List container registry auths**

Returns a list of container registry auths. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `id` (string): A unique string identifying a container registry authentication.
          - Example: `clzdaifot0001l90809257ynb`
        - `name` (string): A user-defined name for a container registry authentication. The name must be unique.
          - Example: `my creds`
- `400`: Invalid ID supplied.
- `404`: Container registry auth not found.
