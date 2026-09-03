> Commit-pinned source for n8n main: [docs/administer/use-source-control-and-environments/compare-versions.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/administer/use-source-control-and-environments/compare-versions.md)

# Compare changes with workflow diffs <a id="compare-changes-with-workflow-diffs"></a>

Workflow diffs allow you to visually compare changes between the workflow you have on an instance and the most recent version saved in your connected Git repository. This helps you understand the exact changes to the workflow before you decide to either push or pull it across different environments.

> **Info**
> **Feature availability**
>
> Workflow diffs are available on:
>
> - **n8n Cloud:** Enterprise
> - **Self-hosted:** Business, Enterprise
>
> Workflow diffs are only available when you [enable the environments features](https://docs.n8n.io/administer/use-source-control-and-environments/set-up-source-control) on an instance.

## Accessing workflow diffs <a id="accessing-workflow-diffs"></a>

You can access workflow diffs from two locations:

1. **When pushing changes**: Click the workflow diff icon in the commit modal alongside the workflow you want to review
2. **When pulling changes**: Click the workflow diff icon in the modified changes modal alongside the workflow you want to review

## Understanding the workflow diff view <a id="understanding-the-workflow-diff-view"></a>

When you open a workflow diff, n8n displays two workflows stacked vertically:

### When pushing <a id="when-pushing"></a>

- **Top panel** (Remote branch): Latest version in your Git repository
- **Bottom panel** (Local): Current locally saved version of the workflow

### When pulling <a id="when-pulling"></a>

- **Top panel** (Local): Current version on your n8n instance
- **Bottom panel** (Remote branch): Version you're pulling from the Git repository

In both cases, the top panel always displays the workflow that will update with changes.

The diff view highlights three types of changes:

- **Added nodes and connectors**: New node additions or connectors will show as green along with an "N" icon
- **Modified nodes and connectors**: Modifications to existing nodes or connectors will show as orange along with a "M" icon
- **Deleted nodes and connectors**: Node or connector deletions will show as red along with a "D" icon

## Reviewing node changes <a id="reviewing-node-changes"></a>

For modified nodes, you can also compare the specific changes. Click modified nodes to show a JSON diff of the changes. You can review the exact configuration for that node before and after the given change.

## Viewing the summary of changes <a id="viewing-the-summary-of-changes"></a>

In the top-right corner, the **changes** button shows the number of changes. This represents the total number of changes across node and node connectors, as well as general workflow settings updates.

## Navigating through each change <a id="navigating-through-each-change"></a>

You can use the **next** and **previous** arrows in the upper-right corner to cycle through your changes in a logical order. Use the **back** button in the top-left corner to return to the commit or pull modal to select a different workflow to review changes on.

## Who can use workflow diffs <a id="who-can-use-workflow-diffs"></a>

Only users who can push or pull commits for an instance can access workflow diffs:

- instance owners
- instance admins
- project admins
