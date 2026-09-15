> Pinned source for Vast.ai main: [host/sdk/list-machines.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/host/sdk/list-machines.mdx)
> Canonical documentation: https://docs.vast.ai/host/sdk/list-machines

# VastAI.list_machines

List details of multiple machines with optional pricing and configuration parameters.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.list_machines(
    ids: List[int],
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

**Property (type: List\[int]; required)**

ids

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
result = client.list_machines(ids=[12345])
print(result)
```
