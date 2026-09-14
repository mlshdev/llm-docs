> Pinned source for Vast.ai main: [host/sdk/show-machine.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/host/sdk/show-machine.mdx)
> Canonical documentation: https://docs.vast.ai/host/sdk/show-machine

# VastAI.show_machine

Show details of a hosted machine.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.show_machine(id: int) -> dict
```

## Parameters

**Property (type: int; required)**

Machine ID.

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_machine(id=12345)
print(result)
```
