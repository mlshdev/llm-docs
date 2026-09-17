> Pinned source for Vast.ai main: [sdk/python/reference/launch-instance.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/launch-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/launch-instance

# VastAI.launch_instance

Launch the top instance from search offers matching the given criteria.

## Signature

```python
VastAI.launch_instance(
    gpu_name: str,
    num_gpus: str,
    image: str,
    region: Optional[str] = None,
    disk: float = 10,
    order: str = 'score-',
    limit: Optional[int] = None,
    env: Optional[Union[str, dict]] = None,
    label: Optional[str] = None,
    extra: Optional[str] = None,
    onstart_cmd: Optional[str] = None,
    login: Optional[str] = None,
    python_utf8: bool = False,
    lang_utf8: bool = False,
    jupyter_lab: bool = False,
    jupyter_dir: Optional[str] = None,
    cancel_unavail: bool = False,
    template_hash: Optional[str] = None,
    runtype: Optional[str] = None,
    args: Optional[list] = None,
    query: Optional[dict] = None,
    ssh: bool = False,
    jupyter: bool = False,
    direct: bool = False
) -> dict
```

## Parameters

**Property (type: str; required)**

Name of the GPU model, replace spaces with underscores

**Property (type: str; required)**

Number of GPUs required

**Property (type: str; required)**

Name of the image to use for instance

**Property (type: Optional\[str])**

Geographical location of the instance

**Property (type: float)**

Disk space required in GB

**Property (type: str)**

Comma-separated list of fields to sort on. postfix field with - to sort desc. ex: -o 'num\_gpus,total\_flops-'.  default='score-'

**Property (type: Optional\[int])**

**Property (type: Optional\[Union\[str, dict]])**

env variables and port mapping options, surround with ''

**Property (type: Optional\[str])**

label to set on the instance

**Property (type: Optional\[str])**

**Property (type: Optional\[str])**

contents of onstart script as single argument

**Property (type: Optional\[str])**

docker login arguments for private repo authentication, surround with ''

**Property (type: bool)**

Workaround for images with locale problems: set python's locale to C.UTF-8

**Property (type: bool)**

Workaround for images with locale problems: install and generate locales before instance launch, and set locale to C.UTF-8

**Property (type: bool)**

For runtype 'jupyter', Launch instance with jupyter lab

**Property (type: Optional\[str])**

For runtype 'jupyter', directory in instance to use to launch jupyter. Defaults to image's working directory

**Property (type: bool)**

Return error if scheduling fails (rather than creating a stopped instance)

**Property (type: Optional\[str])**

template hash which contains all relevant information about an instance. This can be used as a replacement for other parameters describing the instance configuration

**Property (type: Optional\[str])**

**Property (type: Optional\[list])**

list of arguments passed to container ENTRYPOINT. Onstart is recommended for this purpose. (must be last argument)

**Property (type: Optional\[dict])**

**Property (type: bool)**

Launch as an ssh instance type

**Property (type: bool)**

Launch as a jupyter instance instead of an ssh instance

**Property (type: bool)**

Use (faster) direct connections for jupyter & ssh

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.launch_instance(gpu_name="value", num_gpus="value", image="value")
print(result)
```
