> Pinned source for Vast.ai main: [sdk/python/reference/update-instance.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/update-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-instance

# VastAI.update_instance

Update/recreate an instance from a new/updated template.

## Signature

```python
VastAI.update_instance(
    id: int,
    template_id: Optional[int] = None,
    template_hash_id: Optional[str] = None,
    image: Optional[str] = None,
    args: Optional[str] = None,
    env: Optional[loads] = None,
    onstart: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to update

**Property (type: Optional\[int])**

new template ID to associate with the instance

**Property (type: Optional\[str])**

new template hash ID to associate with the instance

**Property (type: Optional\[str])**

new image UUID for the instance

**Property (type: Optional\[str])**

new arguments for the instance

**Property (type: Optional\[loads])**

new environment variables for the instance

**Property (type: Optional\[str])**

new onstart script for the instance

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.update_instance(id=12345)
print(result)
```
