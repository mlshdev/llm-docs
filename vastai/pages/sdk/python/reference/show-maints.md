> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-maints.mdx](https://docs.vast.ai/sdk/python/reference/show-maints)

# VastAI.show_maints

Show maintenance information for host machines.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.show_maints(ids: str) -> list[dict]
```

## Parameters

**Property (type: str; required)**

Machine IDs to show maintenance windows for.

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_maints(ids="...")
print(result)
```
