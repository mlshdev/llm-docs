> Pinned source for Vast.ai main: [sdk/python/reference/clone-volume.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/clone-volume.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/clone-volume

# VastAI.clone_volume

Clone an existing volume.

## Signature

```python
VastAI.clone_volume(
    source: int,
    dest: int,
    size: Optional[float] = None,
    disable_compression: bool = False
) -> dict
```

## Parameters

**Property (type: int; required)**

id of volume contract being cloned

**Property (type: int; required)**

id of volume offer volume is being copied to

**Property (type: Optional\[float])**

Size of new volume contract, in GB. Must be greater than or equal to the source volume, and less than or equal to the destination offer.

**Property (type: bool)**

Do not compress volume data before copying.

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.clone_volume(source=12345, dest=12345)
print(result)
```
