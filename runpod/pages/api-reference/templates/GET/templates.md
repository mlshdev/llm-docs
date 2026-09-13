> Commit-pinned source for Runpod main: [api-reference/templates/GET/templates.mdx](https://docs.runpod.io/api-reference/templates/GET/templates)

# List templates

`GET /templates`

**List templates**

Returns a list of templates. Review authentication, request parameters, response fields, and errors for this Runpod API operation.

**Parameters**

- `includeEndpointBoundTemplates` (query)
- `includePublicTemplates` (query)
- `includeRunpodTemplates` (query)

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Template not found.
