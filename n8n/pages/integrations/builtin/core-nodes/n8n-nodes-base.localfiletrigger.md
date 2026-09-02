> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger.md)

# Local File Trigger node <a id="local-file-trigger-node"></a>

The Local File Trigger node starts a workflow when it detects changes on the file system. These changes involve a file or folder getting added, changed, or deleted.

> **Warning**
> **Security considerations**
>
> The Local File Trigger node can introduce significant security risks in environments that operate with untrusted users. Because of this, the node is [disabled](https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/block-specific-nodes#exclude-nodes) by default from n8n 2.0.

> **Info**
> **Self-hosted n8n only**
>
> This node isn't available on n8n Cloud.

## Node parameters <a id="node-parameters"></a>

You can choose what event to watch for using the **Trigger On** parameter.

## Changes to a Specific File <a id="changes-to-a-specific-file"></a>

The node triggers when the specified file changes.

Enter the path for the file to watch in **File to Watch**.

## Changes Involving a Specific Folder <a id="changes-involving-a-specific-folder"></a>

The node triggers when a change occurs in the selected folder.

Configure these parameters:

- **Folder to Watch**: Enter the path of the folder to watch.
- **Watch for**: Select the type of change to watch for.

## Node options <a id="node-options"></a>

Use the node **Options** to include or exclude files and folders.

- **Include Linked Files/Folders**: also watch for changes to linked files or folders.
- **Ignore**: files or paths to ignore. n8n tests the whole path, not just the filename. Supports the [Anymatch](https://github.com/micromatch/anymatch) syntax.
- **Max Folder Depth**: how deep into the folder structure to watch for changes.

### Examples for Ignore <a id="examples-for-ignore"></a>

Ignore a single file:

```sh
**/<fileName>.<suffix>
# For example, **/myfile.txt <a id="for-example-myfiletxt"></a>
```

Ignore a sub-directory of a directory you're watching:

```sh
**/<directoryName>/**
# For example, **/myDirectory/** <a id="for-example-mydirectory"></a>
```

## Templates and examples <a id="templates-and-examples"></a>

[Browse Local File Trigger node documentation integration templates](https://n8n.io/integrations/local-file-trigger) or [search all templates](https://n8n.io/workflows/)
