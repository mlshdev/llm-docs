> Commit-pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/template](https://docs.vast.ai/api-reference/templates/edit-template)

# edit template

`PUT /api/v0/template`

Edits an existing template in place.

Templates are mutable. Use PUT with the template's `hash_id` to update it. You only need to include the fields you want to change - unchanged fields retain their existing values.

Note: The template's `hash_id` will change after editing (since it's content-based), but the numeric `id` stays the same.

For detailed usage, see [Creating and Using Templates with API](/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai update template <hash_id> [options]`

**Request body**

**Responses**

- `200`: Template updated successfully
- `401`: Unauthorized - invalid or missing API key
- `404`: Template not found
