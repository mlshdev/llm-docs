> Commit-pinned source for Runpod main: [api-reference/templates/DELETE/templates/templateId.mdx](https://docs.runpod.io/api-reference/templates/DELETE/templates/templateId)

# Delete a template

`DELETE /templates/{templateId}`

**Delete a template**

Delete a template. Use this API reference to review authentication, request parameters, response fields, and errors for this Runpod operation.

**Parameters**

- `templateId` (path, required): Template ID to delete.

**Responses**

- `204`: Template successfully deleted.
- `400`: Invalid template ID.
- `401`: Unauthorized.
