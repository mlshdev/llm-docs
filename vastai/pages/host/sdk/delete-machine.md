> Commit-pinned source for Vast.ai main: [host/sdk/delete-machine.mdx](https://docs.vast.ai/host/sdk/delete-machine)

# VastAI.delete_machine

Delete a machine if not being used by clients.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.delete_machine(id: int) -> str
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
result = client.delete_machine(id=12345)
print(result)
```
