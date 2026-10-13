> Pinned source for Runpod main: [api-reference/templates/DELETE/templates/templateId.mdx](https://github.com/runpod/docs/blob/674b3f2b13fbc59fb349a716b32faf18fb2fcc98/api-reference/templates/DELETE/templates/templateId.mdx)
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
