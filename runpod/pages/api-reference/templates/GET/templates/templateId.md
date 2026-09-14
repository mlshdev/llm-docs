> Commit-pinned source for Runpod main: [api-reference/templates/GET/templates/templateId.mdx](https://docs.runpod.io/api-reference/templates/GET/templates/templateId)

# Find a template by ID

`GET /templates/{templateId}`

**Find a template by ID**

Returns a single template. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `includeEndpointBoundTemplates` (query)
- `includePublicTemplates` (query)
- `includeRunpodTemplates` (query)
- `templateId` (path, required): ID of template to return.

**Responses**

- `200`: Successful operation.
- `400`: Invalid ID supplied.
- `404`: Template not found.
