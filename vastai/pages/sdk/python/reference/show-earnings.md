> Pinned source for Vast.ai main: [sdk/python/reference/show-earnings.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/show-earnings.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-earnings

# VastAI.show_earnings

Show earnings information.

## Signature

```python
VastAI.show_earnings(
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    machine_id: Optional[int] = None
) -> list[dict]
```

## Parameters

**Property (type: Optional\[str])**

start date and time for report. Many formats accepted

**Property (type: Optional\[str])**

end date and time for report. Many formats accepted

**Property (type: Optional\[int])**

Machine id (optional)

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_earnings()
print(result)
```
