> Pinned source for Runpod main: [api-reference/templates/DELETE/templates/templateId.mdx](https://github.com/runpod/docs/blob/b3d94eb34607d1c8be2215f891c34b55b0a5df24/api-reference/templates/DELETE/templates/templateId.mdx)
> Canonical documentation: https://docs.runpod.io/api-reference/templates/DELETE/templates/templateId

# Delete a template

`DELETE /templates/{templateId}`

**Delete a template**

Delete a template. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Authentication:** `ApiKey`

**Parameters**

- `templateId` (path; required; string): Template ID to delete.

**Responses**

- `204`: Template successfully deleted.
- `400`: Invalid template ID.
- `401`: Unauthorized.
