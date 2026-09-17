> Pinned source for Vast.ai main: [sdk/python/reference/delete-scheduled-job.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/delete-scheduled-job.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-scheduled-job

# VastAI.delete_scheduled_job

Delete a scheduled job.

## Signature

```python
VastAI.delete_scheduled_job(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of scheduled job to remove

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_scheduled_job(id=12345)
print(result)
```
