> Pinned source for Trigger.dev v4.6.0: [docs/management/envvars/list.mdx](https://github.com/triggerdotdev/trigger.dev/blob/6172bcd1bc67044a295aa41acb49d92db954de3d/docs/management/envvars/list.mdx)
> Canonical documentation: https://trigger.dev/docs/management/envvars/list

# List Env Vars

`GET /api/v1/projects/{projectRef}/envvars/{env}`

**List environment variables**

List all environment variables for a specific project and environment.

**Authentication:** `secretKey` or `personalAccessToken`

**Parameters**

- `projectRef` (path; required; string): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
  - Example: `proj_yubjwjsfkxnylobaqvqz`
- `env` (path; required; string; enum: `dev`, `staging`, `prod`): The environment of the project to list variables for.
  - Example: `dev`

**Responses**

- `200`: Successful request
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `name` (required; string)
          - Example: `SLACK_API_KEY`
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
