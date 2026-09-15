> Pinned source for Vast.ai main: [cli/reference/cloud-copy.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/cli/reference/cloud-copy.mdx)
> Canonical documentation: https://docs.vast.ai/cli/reference/cloud-copy

# vastai cloud copy

Copy files/folders to and from cloud providers

## Usage

```bash
vastai cloud copy --src SRC --dst DST --instance INSTANCE_ID -connection CONNECTION_ID --transfer TRANSFER_TYPE
```

## Options

**Property (type: string)**

path to source of object to copy

**Property (type: string)**

path to target of copy operation

**Property (type: string)**

id of the instance

**Property (type: string)**

id of cloud connection on your account (get from calling 'vastai show connections')

**Property (type: string)**

type of transfer, possible options include Instance To Cloud and Cloud To Instance

**Property (type: boolean)**

show what would have been transferred

**Property (type: boolean)**

skip based on size only, not mod-time or checksum

**Property (type: boolean)**

skip all files that exist on destination

**Property (type: boolean)**

skip files that are newer on the destination

**Property (type: boolean)**

delete files on dest excluded from transfer

**Property (type: string)**

try to schedule a command to run hourly, daily, or monthly. Valid values are HOURLY, DAILY, WEEKLY  For ex. `--schedule` DAILY Choices: `HOURLY`, `DAILY`, `WEEKLY`

**Property (type: string)**

Start date/time in format 'YYYY-MM-DD HH:MM:SS PM' (UTC). Default is now. (optional)

**Property (type: string)**

End date/time in format 'YYYY-MM-DD HH:MM:SS PM' (UTC). Default is contract's end. (optional)

**Property (type: integer)**

Day of week you want scheduled job to run on (0-6, where 0=Sunday) or "\*". Default will be 0. For ex. `--day` 0

**Property (type: integer)**

Hour of day you want scheduled job to run on (0-23) or "\*" (UTC). Default will be 0. For ex. `--hour` 16

## Description

Copies a directory from a source location to a target location. Each of source and destination
directories can be either local or remote, subject to appropriate read and write
permissions required to carry out the action. The format for both src and dst is \[instance\_id:]path.
You can find more information about the cloud copy operation here: <https://vast.ai/docs/gpu-instances/cloud-sync>

## Examples

```bash
vastai show connections
 ID    NAME      Cloud Type
 1001  test_dir  drive
 1003  data_dir  drive

 vastai cloud copy --src /folder --dst /workspace --instance 6003036 --connection 1001 --transfer "Instance To Cloud"

The example copies all contents of /folder into /workspace on instance 6003036 from gdrive connection 'test_dir'.
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
