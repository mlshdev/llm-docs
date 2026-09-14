> Pinned source for Vast.ai main: [api-reference/openapi.yaml#put /api/v0/template](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/api-reference/openapi.yaml%23put%20/api/v0/template)
> Canonical documentation: https://docs.vast.ai/api-reference/templates/edit-template

# edit template

`PUT /api/v0/template`

Edits an existing template in place.

Templates are mutable. Use PUT with the template's `hash_id` to update it. You only need to include the fields you want to change - unchanged fields retain their existing values.

Note: The template's `hash_id` will change after editing (since it's content-based), but the numeric `id` stays the same.

For detailed usage, see [Creating and Using Templates with API](https://docs.vast.ai/api-reference/creating-and-using-templates-with-api).

CLI Usage: `vastai update template <hash_id> [options]`

**Authentication:** `BearerAuth`

**Request body** (required)

- Media type: `application/json`
  - Schema (object)
    - `hash_id` (required; string): Hash ID of the template to edit. Required for identifying which template to update.
    - `name` (string): Name of the template
    - `image` (string): Docker image path
    - `desc` (string): Short description of the template
    - `recommended_disk_space` (number): Recommended disk space in GB
  - Example: `{"hash_id":"5915f1dc1ce881defb572015eb9d8178","desc":"Updated description","recommended_disk_space":16}`

**Responses**

- `200`: Template updated successfully
  - Media type: `application/json`
    - Schema (object)
      - `success` (boolean)
      - `template` (object)
        - `id` (integer): Template numeric ID (unchanged after edit)
        - `hash_id` (string): Updated template hash ID (changes based on content)
- `401`: Unauthorized - invalid or missing API key
- `404`: Template not found
