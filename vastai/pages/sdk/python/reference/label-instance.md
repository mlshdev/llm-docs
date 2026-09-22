> Pinned source for Vast.ai main: [sdk/python/reference/label-instance.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/label-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/label-instance

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
