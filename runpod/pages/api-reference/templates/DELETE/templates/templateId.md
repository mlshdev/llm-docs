> Pinned source for Runpod main: [api-reference/templates/DELETE/templates/templateId.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/api-reference/templates/DELETE/templates/templateId.mdx)
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
