> Pinned source for Trigger.dev v4.5.16: [docs/management/envvars/create.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/envvars/create.mdx)
> Canonical documentation: https://trigger.dev/docs/management/envvars/create

# Create Env Var

`POST /api/v1/projects/{projectRef}/envvars/{env}`

**Create environment variable**

Create a new environment variable for a specific project and environment.

**Authentication:** `secretKey` or `personalAccessToken`

**Parameters**

- `projectRef` (path; required; string): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
  - Example: `proj_yubjwjsfkxnylobaqvqz`
- `env` (path; required; string; enum: `dev`, `staging`, `prod`): The environment of the project to list variables for.
  - Example: `dev`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `name` (required; string)
      - Example: `SLACK_API_KEY`
    - `value` (required; string)
      - Example: `slack_123456`

**Responses**

- `200`: Environment variable created successfully
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
      - `error` (string)
- `404`: Resource not found
  - Media type: `application/json`
    - Schema (object)
      - `error` (string)
