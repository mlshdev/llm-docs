> Pinned source for Trigger.dev v4.7.3: [docs/management/envvars/update.mdx](https://github.com/triggerdotdev/trigger.dev/blob/10b9960d5a45cfb323cfc48a157e3cb8d481339c/docs/management/envvars/update.mdx)
> Canonical documentation: https://trigger.dev/docs/management/envvars/update

# Update Env Var

`PUT /api/v1/projects/{projectRef}/envvars/{env}/{name}`

**Update environment variable**

Update a specific environment variable for a specific project and environment.

**Authentication:** `secretKey` or `personalAccessToken`

**Parameters**

- `projectRef` (path; required; string): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
  - Example: `proj_yubjwjsfkxnylobaqvqz`
- `env` (path; required; string; enum: `dev`, `staging`, `prod`): The environment of the project to list variables for.
  - Example: `dev`
- `name` (path; required; string): The name of the environment variable.
  - Example: `SLACK_API_KEY`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `value` (required; string): The value to store. An empty string is valid and is stored as-is, not treated as a deletion.
      - Example: `slack_123456`

**Responses**

- `200`: Environment variable updated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (required; boolean)
- `400`: Invalid request parameters or body
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
      - `issues` (array)
        - `items` (object)
      - `variableErrors` (array)
        - `items` (object)
- `401`: Unauthorized request
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
