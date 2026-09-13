> Commit-pinned source for Vast.ai main: [sdk/python/reference/cloud-copy.mdx](https://docs.vast.ai/sdk/python/reference/cloud-copy)

# VastAI.cloud_copy

Copy files between cloud and instance.

## Signature

```python
VastAI.cloud_copy(
    src: str,
    dst: str = '/workspace',
    instance: Optional[str] = None,
    connection: Optional[str] = None,
    transfer: str = 'Instance to Cloud',
    dry_run: bool = False,
    size_only: bool = False,
    ignore_existing: bool = False,
    update: bool = False,
    delete_excluded: bool = False,
    flags: Optional[list] = None
) -> dict
```

## Parameters

**Property (type: str; required)**

path to source of object to copy

**Property (type: str)**

path to target of copy operation

**Property (type: Optional\[str])**

id of the instance

**Property (type: Optional\[str])**

id of cloud connection on your account (get from calling 'vastai show connections')

**Property (type: str)**

type of transfer, possible options include Instance To Cloud and Cloud To Instance

**Property (type: bool)**

show what would have been transferred

**Property (type: bool)**

skip based on size only, not mod-time or checksum

**Property (type: bool)**

skip all files that exist on destination

**Property (type: bool)**

skip files that are newer on the destination

**Property (type: bool)**

delete files on dest excluded from transfer

**Property (type: Optional\[list])**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.cloud_copy(src="value")
print(result)
```
