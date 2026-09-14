> Pinned source for Trigger.dev v4.5.16: [docs/management/envvars/retrieve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ee34a4b13710742ae26d94831547fa2b6cddc9bd/docs/management/envvars/retrieve.mdx)
> Canonical documentation: https://trigger.dev/docs/management/envvars/retrieve

# Retrieve Env Var

`GET /api/v1/projects/{projectRef}/envvars/{env}/{name}`

**Retrieve environment variable**

Retrieve a specific environment variable for a specific project and environment.

**Authentication:** `secretKey` or `personalAccessToken`

**Parameters**

- `projectRef` (path; required; string): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
  - Example: `proj_yubjwjsfkxnylobaqvqz`
- `env` (path; required; string; enum: `dev`, `staging`, `prod`): The environment of the project to list variables for.
  - Example: `dev`
- `name` (path; required; string): The name of the environment variable.
  - Example: `SLACK_API_KEY`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (object)
      - `value` (required; string)
        - Example: `slack_123456`
- `400`: Invalid request parameters or body
  - Media type: `application/json`
    - Schema (object)
      - `error` (required; string)
        - Example: `Something went wrong`
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
