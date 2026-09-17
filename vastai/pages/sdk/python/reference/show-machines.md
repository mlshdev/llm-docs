> Pinned source for Vast.ai main: [sdk/python/reference/show-machines.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/show-machines.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-machines

# VastAI.show_machines

Retrieve and display a list of machines based on specified criteria.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.show_machines() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_machines()
print(result)
```
