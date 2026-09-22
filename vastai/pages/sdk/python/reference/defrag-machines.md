> Pinned source for Vast.ai main: [sdk/python/reference/defrag-machines.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/defrag-machines.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/defrag-machines

# VastAI.defrag_machines

Defragment machines.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.defrag_machines(ids: List[int]) -> dict
```

## Parameters

**Property (type: List\[int]; required)**

Machine IDs to defragment.

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.defrag_machines(ids=[12345])
print(result)
```
