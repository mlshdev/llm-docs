> Pinned source for Vast.ai main: [sdk/python/reference/show-machine.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/show-machine.mdx)
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
