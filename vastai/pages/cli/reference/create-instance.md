> Commit-pinned source for Vast.ai main: [cli/reference/create-instance.mdx](https://docs.vast.ai/cli/reference/create-instance)

# vastai create instance

Create a new instance

## Usage

```bash
vastai create instance ID [OPTIONS] [--args ...]
```

## Arguments

**Property (type: integer; required)**

id of instance type to launch (returned from search offers)

## Options

**Property (type: string)**

Create instance from template info

**Property (type: string)**

User to use with docker create. This breaks some images, so only use this if you are certain you need it.

**Property (type: number)**

size of local disk partition in GB

**Property (type: string)**

docker container image to launch

**Property (type: string)**

docker login arguments for private repo authentication, surround with ''

**Property (type: string)**

label to set on the instance

**Property (type: string)**

filename to use as onstart script

**Property (type: string)**

contents of onstart script as single argument

**Property (type: string)**

override entrypoint for args launch instance

**Property (type: boolean)**

Launch as an ssh instance type

**Property (type: boolean)**

Launch as a jupyter instance instead of an ssh instance

**Property (type: boolean)**

Use (faster) direct connections for jupyter & ssh

**Property (type: string)**

For runtype 'jupyter', directory in instance to use to launch jupyter. Defaults to image's working directory

**Property (type: boolean)**

For runtype 'jupyter', Launch instance with jupyter lab

**Property (type: boolean)**

Workaround for images with locale problems: install and generate locales before instance launch, and set locale to C.UTF-8

**Property (type: boolean)**

Workaround for images with locale problems: set python's locale to C.UTF-8

**Property (type: string)**

env variables and port mapping options, surround with ''

**Property (type: string)**

list of arguments passed to container ENTRYPOINT. Onstart is recommended for this purpose. (must be last argument)

**Property (type: boolean)**

Skip sanity checks when creating from an existing instance

**Property (type: boolean)**

Return error if scheduling fails (rather than creating a stopped instance)

**Property (type: number)**

(OPTIONAL) create an INTERRUPTIBLE instance with per machine bid price in $/hour

**Property (type: integer)**

Create a new local volume using an ID returned from the "search volumes" command and link it to the new instance

**Property (type: integer)**

ID of an existing rented volume to link to the instance during creation. (returned from "show volumes" cmd)

**Property (type: integer)**

Size of the volume to create in GB. Only usable with `--create-volume` (default 15GB)

**Property (type: string)**

The path to the volume from within the new instance container. e.g. /root/volume

**Property (type: string)**

(optional) A name to give the new volume. Only usable with `--create-volume`

## Description

Performs the same action as pressing the "RENT" button on the website at <https://console.vast.ai/create/>
Creates an instance from an offer ID (which is returned from "search offers"). Each offer ID can only be used to create one instance.
Besides the offer ID, you must pass in an '`--image`' argument as a minimum.

If you use args/entrypoint launch mode, we create a container from your image as is, without attempting to inject ssh and or jupyter.
If you use the args launch mode, you can override the entrypoint with `--entrypoint`, and pass arguments to the entrypoint with `--args`.
If you use `--args`, that must be the last argument, as any following tokens are consumed into the args string.
For ssh/jupyter launch types, use `--onstart-cmd` to pass in startup script, instead of `--entrypoint` and `--args`.

## Examples

```bash
# create an on-demand instance with the PyTorch (cuDNN Devel) template and 64GB of disk
vastai create instance 384826 --template_hash 661d064bbda1f2a133816b6d55da07c3 --disk 64

# create an on-demand instance with the pytorch/pytorch image, 40GB of disk, open 8081 udp, direct ssh, set hostname to billybob, and a small onstart script
vastai create instance 6995713 --image pytorch/pytorch --disk 40 --env '-p 8081:8081/udp -h billybob' --ssh --direct --onstart-cmd "env | grep _ >> /etc/environment; echo 'starting up'";

# create an on-demand instance with the bobsrepo/pytorch:latest image, 20GB of disk, open 22, 8080, jupyter ssh, and set some env variables
vastai create instance 384827  --image bobsrepo/pytorch:latest --login '-u bob -p 9d8df!fd89ufZ docker.io' --jupyter --direct --env '-e TZ=PDT -e XNAME=XX4 -p 22:22 -p 8080:8080' --disk 20

# create an on-demand instance with the pytorch/pytorch image, 40GB of disk, override the entrypoint to bash and pass bash a simple command to keep the instance running. (args launch without ssh/jupyter)
vastai create instance 5801802 --image pytorch/pytorch --disk 40 --onstart-cmd 'bash' --args -c 'echo hello; sleep infinity;'

# create an interruptible (spot) instance with the PyTorch (cuDNN Devel) template, 64GB of disk, and a bid price of $0.10/hr
vastai create instance 384826 --template_hash 661d064bbda1f2a133816b6d55da07c3 --disk 64 --bid_price 0.1

Return value:
Returns a json reporting the instance ID of the newly created instance:
{'success': True, 'new_contract': 7835610}
```

## Global Options

The following options are available for all commands:

| Option          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `--url URL`     | Server REST API URL                                   |
| `--retry N`     | Retry limit                                           |
| `--raw`         | Output machine-readable JSON                          |
| `--explain`     | Verbose explanation of API calls                      |
| `--api-key KEY` | API key (defaults to `~/.config/vastai/vast_api_key`) |
