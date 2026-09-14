> Pinned source for Vast.ai main: [sdk/python/reference/unlist-machine.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/unlist-machine.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/unlist-machine

# VastAI.unlist_machine

Unlist a machine from being available for new jobs.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.unlist_machine(id: int) -> str
```

## Parameters

**Property (type: int; required)**

id

## Returns

`str`, Result from the API call.

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.unlist_machine(id=12345)
print(result)
```
