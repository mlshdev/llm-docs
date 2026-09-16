> Pinned source for Vast.ai main: [host/sdk/remove-defjob.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/host/sdk/remove-defjob.mdx)
> Canonical documentation: https://docs.vast.ai/host/sdk/remove-defjob

# VastAI.remove_defjob

Remove the default job from a machine.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.remove_defjob(id: int) -> str
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
result = client.remove_defjob(id=12345)
print(result)
```
