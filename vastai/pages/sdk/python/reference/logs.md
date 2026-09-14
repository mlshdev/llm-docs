> Pinned source for Vast.ai main: [sdk/python/reference/logs.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/logs.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/logs

# VastAI.logs

Retrieve logs for an instance.

## Signature

```python
VastAI.logs(
    instance_id: int,
    tail: Optional[str] = None,
    filter: Optional[str] = None,
    daemon_logs: bool = False
) -> str
```

## Parameters

**Property (type: int; required)**

**Property (type: Optional\[str])**

Number of lines to show from the end of the logs (default '1000')

**Property (type: Optional\[str])**

Grep filter for log entries

**Property (type: bool)**

Fetch daemon system logs instead of container logs

## Returns

`str`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.logs(instance_id=12345)
print(result)
```
