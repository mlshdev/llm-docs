> Pinned source for Runpod main: [api-reference/container-registry-auths/POST/containerregistryauth.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference/container-registry-auths/POST/containerregistryauth.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/container-registry-auths/POST/containerregistryauth

# Create a new container registry auth

`POST /containerregistryauth`

**Create a new container registry auth**

Create a new container registry auth. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Authentication:** `ApiKey`

**Request body** (required): Create a new container registry auth.

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string): A user-defined name for a container registry authentication. The name must be unique.
      - Example: `my creds`
    - `password` (required; string): The password for the container registry.
      - Example: `my-password`
    - `username` (required; string): The username for the container registry.
      - Example: `my-username`

**Responses**

- `200`: Successful operation.
  - Media type: `application/json`
    - Schema (object)
      - `id` (string): A unique string identifying a container registry authentication.
        - Example: `clzdaifot0001l90809257ynb`
      - `name` (string): A user-defined name for a container registry authentication. The name must be unique.
        - Example: `my creds`
- `400`: Invalid input.
