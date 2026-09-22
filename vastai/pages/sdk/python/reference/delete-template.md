> Pinned source for Vast.ai main: [sdk/python/reference/delete-template.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/delete-template.mdx)
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
