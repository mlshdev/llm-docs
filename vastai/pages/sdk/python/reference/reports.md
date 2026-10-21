> Pinned source for Vast.ai main: [sdk/python/reference/reports.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/reports.mdx)
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
