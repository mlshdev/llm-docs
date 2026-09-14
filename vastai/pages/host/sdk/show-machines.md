> Commit-pinned source for Vast.ai main: [host/sdk/show-machines.mdx](https://docs.vast.ai/host/sdk/show-machines)

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
