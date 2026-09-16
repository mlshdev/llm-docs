> Pinned source for Vast.ai main: [api-reference/openapi.yaml#delete /api/v0/workergroups/{id}](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/api-reference/openapi.yaml%23delete%20/api/v0/workergroups/%7Bid%7D)
> Canonical documentation: https://docs.vast.ai/api-reference/serverless/delete-workergroup

# delete workergroup

`DELETE /api/v0/workergroups/{id}`

Deletes an existing workergroup.

CLI Usage: `vastai delete workergroup <id>`

**Authentication:** `BearerAuth`

**Parameters**

- `id` (path; required; integer): ID of the workergroup to delete

**Responses**

- `200`: Workergroup deleted successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `deleted_workers` (array): List of worker instances that were deleted
        - Example: `[1001,1002]`
        - `items` (integer)
      - `failed_workers` (array): List of worker instances that failed to delete
        - Example: `[]`
        - `items` (integer)
      - `msg` (string): Additional information about the deletion
        - Example: `Deleted workergroup and 2 workers`
- `400`: Bad request
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Invalid autojob ID`
- `401`: Unauthorized
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
      - `msg` (string)
- `404`: Workergroup not found
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `no_such_workergroup`
      - `msg` (string)
        - Example: `No workergroup by that id is available.`
      - `id` (integer)
        - Example: `4242`
- `429`: Too Many Requests
  - Media type: `application/json`
    - Schema (object)
      - `detail` (string)
        - Example: `API requests too frequent endpoint threshold=3.0`
