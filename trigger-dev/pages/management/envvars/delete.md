> Pinned source for Trigger.dev v4.6.3: [docs/management/envvars/delete.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/management/envvars/delete.mdx)
> Canonical documentation: https://trigger.dev/docs/management/envvars/delete

# Delete Env Var

`DELETE /api/v1/projects/{projectRef}/envvars/{env}/{name}`

**Delete environment variable**

Delete a specific environment variable for a specific project and environment.

**Authentication:** `secretKey` or `personalAccessToken`

**Parameters**

- `projectRef` (path; required; string): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
  - Example: `proj_yubjwjsfkxnylobaqvqz`
- `env` (path; required; string; enum: `dev`, `staging`, `prod`): The environment of the project to list variables for.
  - Example: `dev`
- `name` (path; required; string): The name of the environment variable.
  - Example: `SLACK_API_KEY`

**Responses**

- `200`: Environment variable deleted successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (required; boolean)
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
