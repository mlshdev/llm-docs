> Pinned source for Vast.ai main: [sdk/python/reference/cleanup-machine.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/cleanup-machine.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/cleanup-machine

# VastAI.cleanup_machine

Clean up a machine's configuration and resources.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.cleanup_machine(id: int) -> str
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
result = client.cleanup_machine(id=12345)
print(result)
```
