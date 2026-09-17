> Pinned source for Trigger.dev v4.6.3: [docs/management/envvars/import.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/management/envvars/import.mdx)
> Canonical documentation: https://trigger.dev/docs/management/envvars/import

# Import Env Vars

`POST /api/v1/projects/{projectRef}/envvars/{env}/import`

**Upload environment variables**

Upload mulitple environment variables for a specific project and environment.

**Authentication:** `secretKey` or `personalAccessToken`

**Parameters**

- `projectRef` (path; required; string): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
  - Example: `proj_yubjwjsfkxnylobaqvqz`
- `env` (path; required; string; enum: `dev`, `staging`, `prod`): The environment of the project to list variables for.
  - Example: `dev`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `variables` (required; array)
      - `items` (object)
        - `name` (required; string)
          - Example: `SLACK_API_KEY`
        - `value` (required; string)
          - Example: `slack_123456`
    - `override` (boolean; default: `false`): Whether to override existing variables or not

**Responses**

- `200`: Environment variables imported successfully
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
