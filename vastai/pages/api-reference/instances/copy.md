> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/commands/copy_direct](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/api-reference/openapi.yaml%23put%20/api/v0/commands/copy_direct)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/copy

# copy

`PUT /api/v0/commands/copy_direct`

Initiate a remote copy operation to transfer data from one instance to another or between an instance and the local machine.

CLI Usage: `vastai copy <src_id> <dst_id> <src_path> <dst_path>`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `src_id` (string): ID of the source instance.
    - `dst_id` (string): ID of the destination instance.
    - `src_path` (required; string): Path of the source data.
    - `dst_path` (required; string): Path of the destination data.

**Responses**

- `200`: Remote copy initiated successfully.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `true`
      - `msg` (string)
        - Example: `Remote to Remote copy initiated - check instance status bar for progress updates (~30 seconds delayed).`
- `400`: Invalid arguments provided.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `invalid_args`
      - `msg` (string)
        - Example: `Invalid src_path.`
- `404`: Source or destination ID not found or access denied.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
        - Example: `false`
      - `error` (string)
        - Example: `no_such_user`
      - `msg` (string)
        - Example: `No such user.`
