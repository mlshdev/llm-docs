> Pinned source for Vast.ai main: [host/sdk/set-defjob.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/host/sdk/set-defjob.mdx)
> Canonical documentation: https://docs.vast.ai/host/sdk/set-defjob

# VastAI.set_defjob

Set a default job on a machine with specified parameters.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.set_defjob(
    id: int,
    price_gpu: Optional[float] = None,
    price_inetu: Optional[float] = None,
    price_inetd: Optional[float] = None,
    image: Optional[str] = None,
    args: Optional[List[str]] = None
) -> str
```

## Parameters

**Property (type: int; required)**

id

**Property (type: Optional\[float])**

price\_gpu

**Property (type: Optional\[float])**

price\_inetu

**Property (type: Optional\[float])**

price\_inetd

**Property (type: Optional\[str])**

image

**Property (type: Optional\[List\[str]])**

args

## Returns

`str`, Result from the API call.

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.set_defjob(id=12345)
print(result)
```
