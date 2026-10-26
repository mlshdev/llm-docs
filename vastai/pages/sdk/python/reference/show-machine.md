> Pinned source for Vast.ai main: [sdk/python/reference/show-machine.mdx](https://github.com/vast-ai/docs/blob/2b2d9a04e7cb542f3305c0c148c2395b0cfab86e/sdk/python/reference/show-machine.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-machine

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
