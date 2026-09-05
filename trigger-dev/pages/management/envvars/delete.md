> Release-pinned source for Trigger.dev v4.5.16: [docs/management/envvars/delete.mdx](https://trigger.dev/docs/management/envvars/delete)

# Delete Env Var

`DELETE /api/v1/projects/{projectRef}/envvars/{env}/{name}`

**Delete environment variable**

Delete a specific environment variable for a specific project and environment.

**Parameters**

- `projectRef` (path, required): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
- `env` (path, required): The environment of the project to list variables for.
- `name` (path, required): The name of the environment variable.

**Responses**

- `200`: Environment variable deleted successfully
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `404`: Resource not found
