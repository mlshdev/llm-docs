> Pinned source for Vast.ai main: [cli/reference/copy.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/copy.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/copy

# vastai copy

Copy directories between instances and/or local

## Usage

```bash
vastai copy SRC DST
```

## Arguments

**Property (type: string; required)**

Source location for copy operation (supports multiple formats)

**Property (type: string; required)**

Target location for copy operation (supports multiple formats)

## Options

**Property (type: string)**

Location of ssh private key (alias: `--identity`)

## Description

Copies a directory from a source location to a target location. Each of source and destination
directories can be either local or remote, subject to appropriate read and write
permissions required to carry out the action.

Supported location formats:

- \[instance\_id:]path               (legacy format, still supported)
- C.instance\_id:path              (container copy format)
- cloud\_service:path              (cloud service format)
- cloud\_service.cloud\_service\_id:path  (cloud service with ID)
- local:path                      (explicit local path)
- V.volume\_id:path                (volume copy, see restrictions)

You should not copy to /root or / as a destination directory, as this can mess up the permissions on your instance ssh folder, breaking future copy operations (as they use ssh authentication)
You can see more information about constraints here: <https://vast.ai/docs/gpu-instances/data-movement#constraints>
Volume copy supports copying to other volumes, instances, and cloud services (via your Cloud Connections). Copying between a volume and a local path is not supported.

## Examples

```bash
vast copy 6003036:/workspace/ 6003038:/workspace/
 vast copy C.11824:/data/test local:data/test
 vast copy local:data/test C.11824:/data/test
 vast copy drive:/folder/file.txt C.6003036:/workspace/
 vast copy s3.101:/data/ C.6003036:/workspace/
 vast copy V.1234:/file C.5678:/workspace/

The first example copy syncs all files from the absolute directory '/workspace' on instance 6003036 to the directory '/workspace' on instance 6003038.
The second example copy syncs files from container 11824 to the local machine using structured syntax.
The third example copy syncs files from local to container 11824 using structured syntax.
The fourth example copy syncs files from Google Drive to an instance.
The fifth example copy syncs files from S3 bucket with id 101 to an instance.
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
