> Pinned source for Vast.ai main: [sdk/python/reference/label-instance.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/label-instance.mdx)
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
