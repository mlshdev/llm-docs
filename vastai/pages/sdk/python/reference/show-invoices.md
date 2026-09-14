> Pinned source for Vast.ai main: [sdk/python/reference/show-invoices.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/show-invoices.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-invoices

# VastAI.show_invoices

Show invoice details (deprecated; use show\_invoices\_v1).

## Signature

```python
VastAI.show_invoices(
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    only_charges: bool = False,
    only_credits: bool = False
) -> dict
```

## Parameters

**Property (type: Optional\[str])**

start date and time for report. Many formats accepted (optional)

**Property (type: Optional\[str])**

end date and time for report. Many formats accepted (optional)

**Property (type: bool)**

Show only charge items

**Property (type: bool)**

Show only credit items

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_invoices()
print(result)
```
