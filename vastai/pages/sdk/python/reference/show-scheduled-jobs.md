> Pinned source for Vast.ai main: [sdk/python/reference/show-scheduled-jobs.mdx](https://github.com/vast-ai/docs/blob/2b2d9a04e7cb542f3305c0c148c2395b0cfab86e/sdk/python/reference/show-scheduled-jobs.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-scheduled-jobs

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
