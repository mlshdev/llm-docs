> Release-pinned source for Trigger.dev v4.5.16: [docs/management/envvars/create.mdx](https://trigger.dev/docs/management/envvars/create)

# Create Env Var

`POST /api/v1/projects/{projectRef}/envvars/{env}`

**Create environment variable**

Create a new environment variable for a specific project and environment.

**Parameters**

- `projectRef` (path, required): The external ref of the project. You can find this in the project settings. Starts with `proj_`.
- `env` (path, required): The environment of the project to list variables for.

**Request body**

**Responses**

- `200`: Environment variable created successfully
- `400`: Invalid request parameters or body
- `401`: Unauthorized request
- `404`: Resource not found
