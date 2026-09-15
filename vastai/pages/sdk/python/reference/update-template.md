> Pinned source for Vast.ai main: [sdk/python/reference/update-template.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/update-template.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-template

# VastAI.update_template

Update an existing template.

## Signature

```python
VastAI.update_template(
    hash_id: str,
    name: Optional[str] = None,
    image: Optional[str] = None,
    image_tag: Optional[str] = None,
    href: Optional[str] = None,
    repo: Optional[str] = None,
    login: Optional[str] = None,
    env: Optional[str] = None,
    ssh: bool = False,
    jupyter: bool = False,
    direct: bool = False,
    jupyter_dir: Optional[str] = None,
    jupyter_lab: bool = False,
    onstart_cmd: Optional[str] = None,
    search_params: Optional[str] = None,
    no_default: bool = False,
    disk_space: Optional[float] = None,
    readme: Optional[str] = None,
    hide_readme: bool = False,
    desc: Optional[str] = None,
    public: bool = False,
    runtype: Optional[str] = None,
    use_ssh: Optional[bool] = None,
    jup_direct: Optional[bool] = None,
    ssh_direct: Optional[bool] = None,
    use_jupyter_lab: Optional[bool] = None,
    docker_login_repo: Optional[str] = None,
    extra_filters: Optional[dict] = None,
    readme_visible: Optional[bool] = None,
    private: Optional[bool] = None
) -> dict
```

## Parameters

**Property (type: str; required)**

**Property (type: Optional\[str])**

name of the template

**Property (type: Optional\[str])**

docker container image to launch

**Property (type: Optional\[str])**

docker image tag

**Property (type: Optional\[str])**

link you want to provide

**Property (type: Optional\[str])**

link to repository

**Property (type: Optional\[str])**

docker login arguments for private repo authentication, surround with ''

**Property (type: Optional\[str])**

Contents of the 'Docker options' field

**Property (type: bool)**

Launch as an ssh instance type

**Property (type: bool)**

Launch as a jupyter instance instead of an ssh instance

**Property (type: bool)**

Use (faster) direct connections for jupyter & ssh

**Property (type: Optional\[str])**

For runtype 'jupyter', directory in instance to use to launch jupyter

**Property (type: bool)**

For runtype 'jupyter', Launch instance with jupyter lab

**Property (type: Optional\[str])**

contents of onstart script as single argument

**Property (type: Optional\[str])**

search offers filters

**Property (type: bool)**

Disable default search param query args

**Property (type: Optional\[float])**

disk storage space, in GB

**Property (type: Optional\[str])**

readme string

**Property (type: bool)**

hide the readme from users

**Property (type: Optional\[str])**

description string

**Property (type: bool)**

make template available to public

**Property (type: Optional\[str])**

**Property (type: Optional\[bool])**

**Property (type: Optional\[bool])**

**Property (type: Optional\[bool])**

**Property (type: Optional\[bool])**

**Property (type: Optional\[str])**

**Property (type: Optional\[dict])**

**Property (type: Optional\[bool])**

**Property (type: Optional\[bool])**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.update_template(hash_id="value")
print(result)
```
