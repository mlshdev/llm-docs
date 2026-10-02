> Pinned source for Trigger.dev v4.7.2: [docs/management/envvars/retrieve.mdx](https://github.com/triggerdotdev/trigger.dev/blob/28f424096e7c82e99e23cfa0c15068565ad98e90/docs/management/envvars/retrieve.mdx)
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
      - `value` (required; string): The value to store. An empty string is valid and is stored as-is, not treated as a deletion.
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
