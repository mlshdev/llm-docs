> Commit-pinned source for Vast.ai main: [sdk/python/reference/label-instance.mdx](https://docs.vast.ai/sdk/python/reference/label-instance)

# VastAI.label_instance

Set a label on an instance.

## Signature

```python
VastAI.label_instance(
    id: int,
    label: str
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to label

**Property (type: str; required)**

label to set

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.label_instance(id=12345, label="value")
print(result)
```
