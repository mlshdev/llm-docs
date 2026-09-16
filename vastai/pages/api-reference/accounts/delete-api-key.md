> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/auth/apikeys/{id}](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23delete%20/api/v0/auth/apikeys/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/accounts/delete-api-key

# delete api key

`DELETE /api/v0/auth/apikeys/{id}`

Deletes an existing API key belonging to the authenticated user.
The API key is soft-deleted by setting a deleted\_at timestamp.

CLI Usage: `vastai delete api-key <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer; minimum: `1`): ID of the API key to delete
  - Example: `123`

**Responses**

- `200`: API key successfully deleted
  - Media type: `application/json`
    - Schema (string)
      - Example: `Successfully Deleted API Key`
- `400`: Bad Request - API key ID not provided
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `API Key ID not provided.`
- `401`: Unauthorized - Invalid or missing authentication
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `403`: Forbidden - API key belongs to a different user
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `You do not have permission to delete this API Key.`
- `404`: Not Found - API key does not exist
  - Media type: `application/json`
    - Schema (object)
      - `msg` (string)
        - Example: `API Key not found.`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=2.0`
