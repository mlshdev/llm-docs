> Commit-pinned source for n8n main: [docs/integrations/builtin/app-nodes/n8n-nodes-base.s3.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/app-nodes/n8n-nodes-base.s3.md)

# S3

Use the S3 node to automate work in non-AWS S3 storage and integrate S3 with other applications. n8n has built-in support for a wide range of S3 features, including creating, deleting, and getting buckets, files, and folders. For AWS S3, use [AWS S3](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awss3).

Use the S3 node for non-AWS S3 solutions like:

- [MinIO](https://min.io/)
- [Wasabi](https://wasabi.com/)
- [Digital Ocean spaces](https://www.digitalocean.com/products/spaces)

On this page, you'll find a list of operations the S3 node supports and links to more resources.

> **Info**
> **Credentials**
>
> Refer to [S3 credentials](https://docs.n8n.io/integrations/builtin/credentials/s3) for guidance on setting up authentication.

> **Info**
> **This node can be used as an AI tool**
>
> This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

## Operations <a id="operations"></a>

- Bucket
  - Create a bucket
  - Delete a bucket
  - Get all buckets
  - Search within a bucket
- File<br>

  - Copy a file
  - Delete a file
  - Download a file
  - Get all files
  - Upload a file

  > **Info**
  > **Attach file for upload**
  >
  > To attach a file for upload, use another node to pass the file as a data property. Nodes like the [Read/Write Files from Disk](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile) node or the [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) work well.
- Folder
  - Create a folder
  - Delete a folder
  - Get all folders

## Templates and examples <a id="templates-and-examples"></a>

[Browse S3 node documentation integration templates](https://n8n.io/integrations/s3) or [search all templates](https://n8n.io/workflows/)

## Node reference <a id="node-reference"></a>

### Setting file permissions in Wasabi <a id="setting-file-permissions-in-wasabi"></a>

When uploading files to [Wasabi](https://wasabi.com/), you must set permissions for the files using the **ACL** dropdown and not the toggles.

![File permissions when using the S3 node with Wasabi](https://raw.githubusercontent.com/n8n-io/n8n-docs/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/.gitbook/assets/acl_dropdown.png)
