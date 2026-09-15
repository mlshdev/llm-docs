> Pinned source for Vast.ai main: [api-reference/openapi.yaml#post /api/v0/commands/rclone](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/api-reference/openapi.yaml%23post%20/api/v0/commands/rclone)
> Canonical documentation: https://docs.vast.ai/api-reference/instances/cloud-copy

# cloud copy

`POST /api/v0/commands/rclone`

Starts a cloud copy operation by sending a command to the remote server. The operation can transfer data between an instance and a cloud service.

CLI Usage: `vastai cloud copy <instance_id> <src> <dst> [options]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `instance_id` (string): ID of the instance.
    - `src` (string): Source path for the copy operation.
    - `dst` (string): Destination path for the copy operation.
    - `selected` (string): ID of the cloud connection.
    - `transfer` (string): Type of transfer (e.g., "Instance To Cloud" or "Cloud To Instance").
    - `flags` (array): Additional flags for the operation.
      - `items` (string)
    - `api_key` (string): API key for authentication.

**Responses**

- `200`: Cloud copy operation initiated successfully.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
      - `msg` (string)
      - `result_url` (string)
- `400`: Bad request due to invalid parameters or cloud service.
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
      - `msg` (string)
