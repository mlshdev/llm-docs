> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-scheduled-jobs.mdx](https://docs.vast.ai/sdk/python/reference/show-scheduled-jobs)

# VastAI.show_scheduled_jobs

Show scheduled jobs for the account.

## Signature

```python
VastAI.show_scheduled_jobs() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_scheduled_jobs()
print(result)
```
