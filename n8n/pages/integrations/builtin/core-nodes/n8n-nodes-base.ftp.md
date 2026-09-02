> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.ftp.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/core-nodes/n8n-nodes-base.ftp.md)

# FTP

The FTP node is useful to access and upload files to an FTP or SFTP server.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/ftp).

To connect to an SFTP server, use an SFTP credential. Refer to [FTP credentials](https://docs.n8n.io/integrations/builtin/credentials/ftp) for more information.

## Operations <a id="operations"></a>

- [**Delete**](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp#delete) a file or folder
- [**Download**](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp#download) a file
- [**List**](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp#list) folder content
- [**Rename**](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp#rename) or move a file or folder
- [**Upload**](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp#upload) a file

> **Info**
> **Uploading files**
>
> To attach a file for upload, you'll need to use an extra node such as the [Read/Write Files from Disk](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile) node or the [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) node to pass the file as a data property.

## Delete <a id="delete"></a>

This operation includes one parameter: **Path**. Enter the remote path that you would like to connect to.

### Delete options <a id="delete-options"></a>

The delete operation adds one new option: **Folder**. If you turn this option on, the node can delete both folders and files. This configuration also displays one more option:

- **Recursive**: If you turn this option on and you delete a folder or directory, the node will delete all files and directories within the target directory.

## Download <a id="download"></a>

Configure this operation with these parameters:

- **Path**: Enter the remote path that you would like to connect to.
- **Put Output File in Field**: Enter the name of the output binary field to put the file in.

> **Info**
> **Concurrent Reads with SFTP**
>
> When using SFTP, you can enable concurrent reads. This improves download speeds but may not be supported by all SFTP servers.

## List <a id="list"></a>

Configure this operation with these parameters:

- **Path**: Enter the remote path that you would like to connect to.
- **Recursive**: Select whether to return an object representing all directories / objects recursively found within the FTP/SFTP server (turned on) or not (turned off).

## Rename <a id="rename"></a>

Configure this operation with these parameters:

- **Old Path**: Enter the existing path of the file you'd like to rename in this field.
- **New Path**: Enter the new path for the renamed file in this field.

### Rename options <a id="rename-options"></a>

This operation adds one new option: **Create Directories**. If you turn this option on, the node will recursively create the destination directory when renaming an existing file or folder.

## Upload <a id="upload"></a>

Configure this operation with these parameters:

- **Path**: Enter the remote path that you would like to connect to.
- **Binary File**: Select whether you'll upload a binary file (turned on) or enter text content to be uploaded (turned off). Other parameters depend on your selection in this field.
  - **Input Binary Field**: Displayed if you turn on **Binary File**. Enter the name of the input binary field that contains the file you'll upload in this field.
  - **File Content**: Displayed if you turn off **Binary File** Enter the text content of the file you'll upload in this field.

> **Info**
> **Uploading files**
>
> To attach a file for upload, you'll need to use an extra node such as the [Read/Write Files from Disk](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile) node or the [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) node to pass the file as a data property.

## Templates and examples <a id="templates-and-examples"></a>

[Browse FTP integration templates](https://n8n.io/integrations/ftp) or [search all templates](https://n8n.io/workflows/)
