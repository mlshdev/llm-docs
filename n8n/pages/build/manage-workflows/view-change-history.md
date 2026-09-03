> Commit-pinned source for n8n main: [docs/build/manage-workflows/view-change-history.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/build/manage-workflows/view-change-history.md)

# View change history

> **Info**
> **Feature availability**
>
> Full workflow history is available on:
>
> - **n8n Cloud:** Enterprise
> - **Self-hosted:** Enterprise
>
> Versions from the last five days are available for n8n Cloud Pro users. Versions from the last 24 hours are available for all users.

Use workflow history to view and restore previous versions of your workflows.

## Understand workflow history <a id="understand-workflow-history"></a>

n8n creates a new version when you:

- Save your workflow.
- Restore an old version. n8n saves the latest version before restoring.
- Pull from a Git repository using [Source control](https://docs.n8n.io/administer/use-source-control-and-environments). Note that n8n saves versions to the instance database, not to Git.

Changes to workflow settings do not create a new version.

> **Info**
> **Workflow history and execution history**
>
> Don't confuse workflow history with the [Workflow-level executions list](https://docs.n8n.io/build/understand-workflows/understand-executions/view-executions-for-a-single-workflow).
>
> Executions are workflow runs. With the executions list, you can see previous runs of the current version of the workflow. You can copy previous executions into the editor to [Debug and re-run past executions](https://docs.n8n.io/build/understand-workflows/understand-executions/debug-executions) in your current workflow.
>
> Workflow history is previous versions of the workflow: for example, a version with a different node, or different parameters set.

## View workflow history <a id="view-workflow-history"></a>

To view a workflow's history:

1. Open the workflow.
2. Select **Workflow history** ![Workflow history icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/build/.gitbook/assets/workflow-history.png). n8n opens a menu showing the saved workflow versions, and a canvas with a preview of the selected version.

## Restore or copy previous versions <a id="restore-or-copy-previous-versions"></a>

You can restore a previous workflow version, or make a copy of it:

1. On the version you want to restore or copy, select **Options** !\[Options icon]\(../.gitbook/assets/three-dot-options-menu (1).png).
2. Choose what you want to do:
   - **Restore version**: replace your current workflow with the selected version.
   - **Clone to new workflow**: create a new workflow based on the selected version.
   - **Open version in new tab**: open a second tab displaying the selected version. Use this to compare versions.
   - **Download**: download the version as JSON.
   - **Name version**: give the version a name and description. n8n never prunes named versions automatically. Refer to [Naming versions](https://docs.n8n.io/build/understand-workflows/save-and-publish-workflows#naming-versions) for more details. Named versions are available on n8n Cloud Pro and Enterprise, and self-hosted Business and Enterprise.
