> Release-pinned source for Trigger.dev v4.5.16: [docs/management/envvars/list.mdx](https://trigger.dev/docs/management/envvars/list)

# List Env Vars

`GET /api/v1/projects/{projectRef}/envvars/{env}`

**List environment variables**

List all environment variables for a specific project and environment.

**Parameters**

- `projectRef` (path, required): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
- `env` (path, required): The environment of the project to list variables for.

**Responses**

- `200`: Successful request
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `404`: Resource not found
