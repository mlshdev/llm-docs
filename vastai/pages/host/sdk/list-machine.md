> Commit-pinned source for Vast.ai main: [host/sdk/list-machine.mdx](https://docs.vast.ai/host/sdk/list-machine)

# VastAI.list_machine

List details of a single machine with optional pricing and configuration parameters.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.list_machine(
    id: int,
    price_gpu: Optional[float] = None,
    price_disk: Optional[float] = None,
    price_inetu: Optional[float] = None,
    price_inetd: Optional[float] = None,
    discount_rate: Optional[float] = None,
    min_chunk: Optional[int] = None,
    end_date: Optional[str] = None
) -> str
```

## Parameters

**Property (type: int; required)**

id

**Property (type: Optional\[float])**

price\_gpu

**Property (type: Optional\[float])**

price\_disk

**Property (type: Optional\[float])**

price\_inetu

**Property (type: Optional\[float])**

price\_inetd

**Property (type: Optional\[float])**

discount\_rate

**Property (type: Optional\[int])**

min\_chunk

**Property (type: Optional\[str])**

end\_date

## Returns

`str`, Result from the API call.

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.list_machine(id=12345)
print(result)
```
