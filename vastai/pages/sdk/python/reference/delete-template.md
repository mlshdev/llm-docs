> Pinned source for Vast.ai main: [sdk/python/reference/delete-template.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/delete-template.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-template

# VastAI.delete_template

Delete a template by ID or hash.

## Signature

```python
VastAI.delete_template(
    template_id: Optional[int] = None,
    hash_id: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: Optional\[int])**

Template ID of Template to Delete

**Property (type: Optional\[str])**

Hash ID of Template to Delete

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_template()
print(result)
```
