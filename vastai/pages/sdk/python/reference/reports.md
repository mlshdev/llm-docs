> Pinned source for Vast.ai main: [sdk/python/reference/reports.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/reference/reports.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/reports

# VastAI.reports

Generate reports for a machine.

## Signature

```python
VastAI.reports(
    id: int
) -> list[dict]
```

## Parameters

**Property (type: int; required)**

machine id

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.reports(id=12345)
print(result)
```
