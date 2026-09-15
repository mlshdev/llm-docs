> Pinned source for Vast.ai main: [host/sdk/defrag-machines.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/host/sdk/defrag-machines.mdx)
> Canonical documentation: https://docs.vast.ai/host/sdk/defrag-machines

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
