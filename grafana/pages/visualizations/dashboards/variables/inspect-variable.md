> Pinned source for Grafana v13.2.2: [docs/sources/visualizations/dashboards/variables/inspect-variable.md](https://github.com/grafana/grafana/blob/3db12332b66497c31f8ad2a5fb0eb0fe0ca05a7e/docs/sources/visualizations/dashboards/variables/inspect-variable.md)

# Manage and inspect variables

In the **Variables** section of the sidebar, you can [add](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/) variables and manage existing variables. You can also inspect variables to identify any dependencies between them.

![Variables section of the dashboard options in the sidebar](https://grafana.com/media/docs/grafana/dashboards/screenshot-manage-variables-v13.2.png)

## Manage variables

You can take the following actions in the **Variables** section of the sidebar:

- **Edit**: Click **Select** on the control to open it in the sidebar so you can make updates. Then you can access the following options:
  - **Duplicate**: Duplicate a variable by clicking the clone icon the sidebar header. This creates a copy of the variable with the name of the original variable prefixed with `copy` and the number of the copy; for example, "copy1".
  - **Delete**: Delete a variable by clicking the trash icon in sidebar header.
- **Reorder**: Drag and drop controls to reorder them.
- **Change display**: Drag and drop controls between sub-sections **Above dashboard**, **Controls menu**, and **Hidden** to update the control display option. Note that links can't be hidden.

## Inspect variables

In addition to managing variables, the **Variables** section lets you quickly identify whether variables have any dependencies.
To check, click **Show dependencies** at the bottom of the list, which opens the dependencies diagram:

![Dependency map showing relationships between dashboard variables](https://grafana.com/media/docs/grafana/dashboards/screenshot-variable-dependencies-v13.2.png)
