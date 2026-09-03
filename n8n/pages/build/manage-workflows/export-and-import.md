> Commit-pinned source for n8n main: [docs/build/manage-workflows/export-and-import.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/build/manage-workflows/export-and-import.md)

# Export and import

n8n saves workflows in JSON format. You can export your workflows as JSON files or import JSON files into your n8n library. You can export and import workflows in several ways.

> **Warning**
> **Sharing credentials**
>
> Exported workflow JSON files include [credential](https://docs.n8n.io/get-started/key-concept-glossary#credential-n8n) names and IDs. While IDs aren't sensitive, the names could be, depending on how you name your credentials. HTTP Request nodes may contain authentication headers when imported from cURL. Remove or anonymize this information from the JSON file before sharing to protect your credentials.

## Copy-Paste <a id="copy-paste"></a>

You can copy and paste a workflow or parts of it by selecting the nodes you want to copy to the clipboard (`Ctrl + c` or `cmd +c`) and pasting it (`Ctrl + v` or `cmd + v`) into the Editor UI.

To select all nodes or a group of nodes, click and drag: ![Select a group of nodes](https://raw.githubusercontent.com/n8n-io/n8n-docs/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/build/.gitbook/assets/selectingnodes.gif)

## From the Editor UI menu <a id="from-the-editor-ui-menu"></a>

From the top navigation bar, select the three dots in the upper right !\[Workflow menu icon]\(../.gitbook/assets/three-dots-horizontal (1).png) to see the following options:

- **Download**: Downloads your current workflow as a JSON file to your computer.
- **Import from URL**: Imports workflow JSON from a URL, for example, [this workflow JSON file on GitHub](https://raw.githubusercontent.com/n8n-io/self-hosted-ai-starter-kit/refs/heads/main/n8n/demo-data/workflows/srOnR8PAY3u4RSwb.json).
- **Import from File**: Imports a workflow as a JSON file from your computer.

## From the command line <a id="from-the-command-line"></a>

### Using the n8n CLI

The `n8n-cli package` commands bundle workflows into a portable `.n8np` file you can import into another instance. See [n8n packages](https://docs.n8n.io/build/manage-workflows/n8n-packages), and [Export a package](https://docs.n8n.io/build/manage-workflows/n8n-packages/export-a-package) for the available options. n8n packages are in Preview and may change in future releases.

> **Info**
> The n8n CLI is the method n8n recommends for moving workflows between instances from the command line. It runs from any machine with network access, carries the folders, projects, and references a workflow needs, and checks an import before writing anything.

### Using the Server CLI

- Export: See the [export commands](https://docs.n8n.io/deploy/host-n8n/configure-n8n/use-the-command-line#export-entities) for exporting workflows or credentials.
- Import: See the [import commands](https://docs.n8n.io/deploy/host-n8n/configure-n8n/use-the-command-line#import-entities) for importing workflows or credentials.

> **Info**
> n8n recommends the [n8n CLI](#using-the-n8n-cli) over the Server CLI export and import commands for new work. We plan to deprecated Server CLI export and import commands, though this is not yet scheduled.

## From the n8n API

The n8n API can export and import [n8n packages](https://docs.n8n.io/build/manage-workflows/n8n-packages), which carry workflows along with the folders, projects, and references they need. n8n packages are in Preview and may change in future releases.

To move a single workflow as JSON instead, use the workflow endpoints in the [n8n API](https://docs.n8n.io/connect/n8n-api).
