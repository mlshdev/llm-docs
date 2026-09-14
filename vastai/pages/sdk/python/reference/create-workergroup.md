> Commit-pinned source for Vast.ai main: [sdk/python/reference/create-workergroup.mdx](https://docs.vast.ai/sdk/python/reference/create-workergroup)

# VastAI.create_workergroup

Create a new autoscale worker group.

## Signature

```python
VastAI.create_workergroup(
    template_hash: Optional[str] = None,
    template_id: Optional[int] = None,
    no_default: bool = False,
    launch_args: Optional[str] = None,
    endpoint_name: Optional[str] = None,
    endpoint_id: Optional[int] = None,
    gpu_ram: Optional[float] = None,
    search_params: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: Optional\[str])**

template hash (required, but **Note**: if you use this field, you can skip search\_params, as they are automatically inferred from the template)

**Property (type: Optional\[int])**

template id (optional)

**Property (type: bool)**

Disable default search param query args

**Property (type: Optional\[str])**

launch args  string for create instance  ex: "--onstart onstart\_wget.sh  --env '-e ONSTART\_PATH=<https://s3.amazonaws.com/vast.ai/onstart_OOBA.sh>' --image atinoda/text-generation-webui:default-nightly --disk 64"

**Property (type: Optional\[str])**

deployment endpoint name (allows multiple workergroups to share same deployment endpoint)

**Property (type: Optional\[int])**

deployment endpoint id (allows multiple workergroups to share same deployment endpoint)

**Property (type: Optional\[float])**

estimated GPU RAM req  (independent of search string)

**Property (type: Optional\[str])**

search param string for search offers    ex: "gpu\_ram>=23 num\_gpus=2 gpu\_name=RTX\_4090 inet\_down>200 direct\_port\_count>2 disk\_space>=64"

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_workergroup()
print(result)
```
