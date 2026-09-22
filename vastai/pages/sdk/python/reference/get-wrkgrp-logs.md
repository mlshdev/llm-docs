> Pinned source for Vast.ai main: [sdk/python/reference/get-wrkgrp-logs.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/get-wrkgrp-logs.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/get-wrkgrp-logs

# VastAI.get_wrkgrp_logs

Fetch logs for a worker group.

## Signature

```python
VastAI.get_wrkgrp_logs(
    id: int,
    level: int = 1,
    tail: Optional[int] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of workergroup to fetch logs from

**Property (type: int)**

log detail level (0 to 3)

**Property (type: Optional\[int])**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.get_wrkgrp_logs(id=12345)
print(result)
```
