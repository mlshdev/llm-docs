> Commit-pinned source for Vast.ai main: [sdk/python/reference/unlist-machine.mdx](https://docs.vast.ai/sdk/python/reference/unlist-machine)

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
