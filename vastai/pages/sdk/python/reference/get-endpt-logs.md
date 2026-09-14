> Pinned source for Vast.ai main: [sdk/python/reference/get-endpt-logs.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/get-endpt-logs.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/get-endpt-logs

# VastAI.get_endpt_logs

Fetch logs for a serverless endpoint.

## Signature

```python
VastAI.get_endpt_logs(
    id: int,
    level: int = 1,
    tail: Optional[int] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of endpoint group to fetch logs from

**Property (type: int)**

log detail level (0 to 3)

**Property (type: Optional\[int])**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.get_endpt_logs(id=12345)
print(result)
```
