> Commit-pinned source for n8n main: [docs/changelog/v20-migration-tool.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/changelog/v20-migration-tool.md)

# n8n 2.0 migration tool <a id="n8n-v20-migration-tool"></a>

The migration tool helps you prepare your n8n instance for upgrading to n8n 2.0 by identifying workflows and configurations that need attention before the upgrade.

![Migration compatibility report showing a workflow-compatible count and Workflow issues / Instance issues tabs](https://raw.githubusercontent.com/n8n-io/n8n-docs/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/changelog/.gitbook/assets/migration-tool.png)

You can see all breaking changes for n8n 2.0 [on this page](https://docs.n8n.io/changelog/v20-breaking-changes).

## Accessing the Tool <a id="accessing-the-tool"></a>

Navigate to **Settings > Migration Report** to view your compatibility status.

> **Info**
> **User role access**
>
> The migration tool is available for global admins only.

## Understanding Your Migration Status <a id="understanding-your-migration-status"></a>

At the top of the page, you'll see:

"X out of Y workflows are compatible with n8n 2.0"

This tells you how many workflows will continue working without changes after upgrading. Your goal is to address the issues preventing the remaining workflows from being compatible, as well as global instance issues.

## Viewing Issues <a id="viewing-issues"></a>

The tool organizes potential problems into two categories:

### Workflow Issues Tab <a id="workflow-issues-tab"></a>

Shows breaking changes that affect specific workflows in your instance.
What you'll see for each issue:

- **Issue title:** A clear name for the problem
- **Severity badge (Critical/Medium/Low):** How urgent this is to fix
  - **Critical:** Fix before upgrading or workflows will fail
  - **Medium:** May cause unexpected behavior or require attention soon
  - **Low:** Minor changes or deprecations that won't break functionality
- **Description:** Explanation of what's changing and why it matters
- **Documentation link:** Click to read detailed migration explanations
- **Affected workflow count:** How many of your workflows have this issue

#### Workflow Issue Detail Page <a id="workflow-issue-detail-page"></a>

Click **X workflows affected** to see all affected workflows.
What you'll see for each workflow:

- **Name:** The workflow name. Click on the name to open the workflow editor.
- **State:** Whether workflow is published or not
- **Node affected:** The list of all the workflow nodes affected by the issue. You can click on each to open the workflow editor with the specific node view opened.
- **Number of executions:** The total number of executions of the workflow
- **Last executed:** The date the workflow was last executed
- **Last updated:** The date the workflow was last updated

### Instance Issues Tab <a id="instance-issues-tab"></a>

Shows configuration changes that affect your entire n8n instance, not specific workflows.
What you'll see for each issue:

- Same information as workflow issues (title, severity, description, docs)
- **No workflow count:** These are global settings that apply instance-wide

The n8n 2.0 migration tool scans your n8n instance to identify potential compatibility issues and configuration changes required for upgrading to n8n 2.0. This reference details each check the tool performs, explains the impact of detected issues, and provides recommendations to prepare your instance for migration.

## Understanding Empty States <a id="understanding-empty-states"></a>

### No Workflow Issues Found <a id="no-workflow-issues-found"></a>

All your workflows are compatible with n8n 2.0. Check the **Instance Issues** tab to ensure your server configuration is also ready.

### No Instance Issues Found <a id="no-instance-issues-found"></a>

Your instance configuration is compatible with n8n 2.0. Check the **Workflow Issues** tab to ensure all workflows are also ready.

### Both Tabs Empty <a id="both-tabs-empty"></a>

Your n8n instance is fully ready to upgrade to n8n 2.0.

## Recommended Workflow <a id="recommended-workflow"></a>

### Initial Assessment <a id="initial-assessment"></a>

- Review the compatibility summary
- Browse all issues in both tabs to understand the scope

### Sort by Severity <a id="sort-by-severity"></a>

- Start with Critical issues (they'll break workflows)
- Move to Medium issues (may cause problems)
- Address Low issues last (deprecation warnings)

### Fix Workflow Issues <a id="fix-workflow-issues"></a>

- Click into each issue to see affected workflows
- Read the documentation for fix instructions
- Update each workflow as needed
- Test workflows in a development environment

### Address Instance Issues <a id="address-instance-issues"></a>

- Update environment variables or server configuration
- Follow documentation for each instance-level change

### Verify Your Work <a id="verify-your-work"></a>

- Click **Refresh** to re-scan. If you don't see any **Refresh** button, just reload the page to re-scan.
- Confirm that unresolved issues don't remain
- Verify compatibility count matches total workflows

### Proceed with Upgrade <a id="proceed-with-upgrade"></a>

After addressing all issues, you're ready to upgrade to n8n 2.0
