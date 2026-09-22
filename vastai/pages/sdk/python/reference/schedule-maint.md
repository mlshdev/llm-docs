> Pinned source for Vast.ai main: [sdk/python/reference/schedule-maint.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/schedule-maint.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/schedule-maint

# VastAI.schedule_maint

Schedule maintenance for a machine.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.schedule_maint(id: int, sdate, duration, category: str = "not provided") -> dict
```

## Parameters

**Property (type: int; required)**

id

**Property (type: Optional\[float])**

sdate

**Property (type: Optional\[float])**

Duration of the maintenance window, in hours.

**Property (type: str)**

Reason for the maintenance window.

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.schedule_maint(id=12345)
print(result)
```
