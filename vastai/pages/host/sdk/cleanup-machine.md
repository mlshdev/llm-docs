> Commit-pinned source for Vast.ai main: [host/sdk/cleanup-machine.mdx](https://docs.vast.ai/host/sdk/cleanup-machine)

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
