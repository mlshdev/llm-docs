> Pinned source for Vast.ai main: [sdk/python/reference/reboot-instance.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/reboot-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/reboot-instance

# VastAI.reboot_instance

Reboot an instance.

## Signature

```python
VastAI.reboot_instance(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to reboot

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.reboot_instance(id=12345)
print(result)
```
