> Pinned source for Vast.ai main: [sdk/python/reference/create-instance.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/create-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-instance

# VastAI.create_instance

Create a new instance from a contract offer ID.

## Signature

```python
VastAI.create_instance(
    id: int,
    image: Optional[str] = None,
    disk: float = 10,
    env: Optional[Union[str, dict]] = None,
    price: Optional[float] = None,
    label: Optional[str] = None,
    extra: Optional[str] = None,
    onstart_cmd: Optional[str] = None,
    login: Optional[str] = None,
    python_utf8: bool = False,
    lang_utf8: bool = False,
    jupyter_lab: bool = False,
    jupyter_dir: Optional[str] = None,
    force: bool = False,
    cancel_unavail: bool = False,
    template_hash: Optional[str] = None,
    user: Optional[str] = None,
    runtype: Optional[str] = None,
    args: Optional[list] = None,
    volume_info: Optional[dict] = None,
    bid_price: Optional[float] = None,
    ssh: bool = False,
    jupyter: bool = False,
    direct: bool = False,
    create_volume: Optional[int] = None,
    link_volume: Optional[int] = None,
    volume_size: Optional[float] = None,
    mount_path: Optional[str] = None,
    volume_label: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance type to launch (returned from search offers)

**Property (type: Optional\[str])**

docker container image to launch

**Property (type: float)**

size of local disk partition in GB

**Property (type: Optional\[Union\[str, dict]])**

env variables and port mapping options, surround with ''

**Property (type: Optional\[float])**

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

Skip sanity checks when creating from an existing instance

**Property (type: bool)**

Return error if scheduling fails (rather than creating a stopped instance)

**Property (type: Optional\[str])**

Create instance from template info

**Property (type: Optional\[str])**

User to use with docker create. This breaks some images, so only use this if you are certain you need it.

**Property (type: Optional\[str])**

**Property (type: Optional\[list])**

list of arguments passed to container ENTRYPOINT. Onstart is recommended for this purpose. (must be last argument)

**Property (type: Optional\[dict])**

**Property (type: Optional\[float])**

(OPTIONAL) create an INTERRUPTIBLE instance with per machine bid price in $/hour

**Property (type: bool)**

Launch as an ssh instance type

**Property (type: bool)**

Launch as a jupyter instance instead of an ssh instance

**Property (type: bool)**

Use (faster) direct connections for jupyter & ssh

**Property (type: Optional\[int])**

Create a new local volume using an ID returned from the "search volumes" command and link it to the new instance

**Property (type: Optional\[int])**

ID of an existing rented volume to link to the instance during creation. (returned from "show volumes" cmd)

**Property (type: Optional\[float])**

Size of the volume to create in GB. Only usable with --create-volume (default 15GB)

**Property (type: Optional\[str])**

The path to the volume from within the new instance container. e.g. /root/volume

**Property (type: Optional\[str])**

(optional) A name to give the new volume. Only usable with --create-volume

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_instance(id=12345)
print(result)
```
