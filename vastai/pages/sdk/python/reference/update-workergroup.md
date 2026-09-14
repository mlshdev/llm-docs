> Pinned source for Vast.ai main: [sdk/python/reference/update-workergroup.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/update-workergroup.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-workergroup

# VastAI.update_workergroup

Update an existing autoscale worker group.

## Signature

```python
VastAI.update_workergroup(
    id: int,
    gpu_ram: Optional[float] = None,
    template_hash: Optional[str] = None,
    template_id: Optional[int] = None,
    search_params: Optional[str] = None,
    no_default: bool = False,
    launch_args: Optional[str] = None,
    endpoint_name: Optional[str] = None,
    endpoint_id: Optional[int] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of autoscale group to update

**Property (type: Optional\[float])**

estimated GPU RAM req  (independent of search string)

**Property (type: Optional\[str])**

template hash (**Note**: if you use this field, you can skip search\_params, as they are automatically inferred from the template)

**Property (type: Optional\[int])**

template id

**Property (type: Optional\[str])**

search param string for search offers    ex: "gpu\_ram>=23 num\_gpus=2 gpu\_name=RTX\_4090 inet\_down>200 direct\_port\_count>2 disk\_space>=64"

**Property (type: bool)**

Disable default search param query args

**Property (type: Optional\[str])**

launch args  string for create instance  ex: "--onstart onstart\_wget.sh  --env '-e ONSTART\_PATH=<https://s3.amazonaws.com/public.vast.ai/onstart_OOBA.sh>' --image atinoda/text-generation-webui:default-nightly --disk 64"

**Property (type: Optional\[str])**

deployment endpoint name (allows multiple workergroups to share same deployment endpoint)

**Property (type: Optional\[int])**

deployment endpoint id (allows multiple workergroups to share same deployment endpoint)

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.update_workergroup(id=12345)
print(result)
```
