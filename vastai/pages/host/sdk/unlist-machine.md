> Pinned source for Vast.ai main: [host/sdk/unlist-machine.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/host/sdk/unlist-machine.mdx)
> Canonical documentation: https://docs.vast.ai/host/sdk/unlist-machine

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
