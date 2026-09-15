> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/endptjobs/{id}](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23delete%20/api/v0/endptjobs/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/delete-endpoint

# delete endpoint

`DELETE /api/v0/endptjobs/{id}`

Deletes an endpoint group by ID. Associated workergroups will also be deleted.

CLI Usage: `vastai delete endpoint <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the endpoint group to delete

**Responses**

- `200`: Endpoint group successfully deleted
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `deleted_workers` (array): List of worker instances that were deleted (if any)
        - Example: `[1001,1002]`
        - `items` (integer)
      - `failed_workers` (array): List of worker instances that failed to delete (if any)
        - Example: `[]`
        - `items` (integer)
      - `msg` (string): Additional information about the deletion
        - Example: `Deleted endpoint job and 2 workers`
- `400`: Bad request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Routegroup not found for user`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
