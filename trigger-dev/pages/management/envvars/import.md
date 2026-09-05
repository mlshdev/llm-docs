> Release-pinned source for Trigger.dev v4.5.16: [docs/management/envvars/import.mdx](https://trigger.dev/docs/management/envvars/import)

# Import Env Vars

`POST /api/v1/projects/{projectRef}/envvars/{env}/import`

**Upload environment variables**

Upload mulitple environment variables for a specific project and environment.

**Parameters**

- `projectRef` (path, required): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
- `env` (path, required): The environment of the project to list variables for.

**Request body**

**Responses**

- `200`: Environment variables imported successfully
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `404`: Resource not found
