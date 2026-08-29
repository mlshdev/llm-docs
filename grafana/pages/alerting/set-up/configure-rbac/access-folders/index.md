> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/set-up/configure-rbac/access-folders/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/set-up/configure-rbac/access-folders/index.md)

# Manage access using folders or data sources

You can extend the access provided by a role to alert rules and rule-specific silences by assigning permissions to individual folders or data sources.

> **Note**
>
> Data source query permissions are required to create an alert rule or modify an alert rule's query using that data source.

This allows different users, teams, or service accounts to have customized access to modify or silence alert rules in specific folders or using specific data sources.

Details on the additional access provided by folder permissions are below.

| Folder permission | Additional Access                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| View              | Read access to all general silences. Read access to alert rules and their rule-specific silences *only* in the given folder and subfolders. |
| Edit              | View access and write access to alert rules and their rule-specific silences *only* in the given folder and subfolders.                     |
| Admin             | Same additional access as Edit.                                                                                                             |

Some example combinations:

| Role          | Folder permission | Access                                                                                                                                                                   |
| ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| No Basic Role | -                 | None. No access to alert rules or rule-specific silences in the folder.                                                                                                  |
| No Basic Role | View              | Read access to all general silences. Read access to alert rules and their rule-specific silences *only* in the given folder and subfolders.                              |
| No Basic Role | Edit              | Above access and write access to alert rules (given necessary data source query permissions) and their rule-specific silences *only* in the given folder and subfolders. |
| Viewer        | -                 | Read access to alert rules and silences in all folders.                                                                                                                  |
| Viewer        | Edit              | Read access to alert rules and silences in all folders. Write access to alert rules and their rule-specific silences *only* in the given folder and subfolders.          |
| Editor        | View              | Read and write access to alert rules and silences in all folders. Access can only be extended.                                                                           |

> **Note**
>
> You can't use folders to customize access to notification resources.

## Folder permissions

To manage folder permissions, complete the following steps.

1. In the left-side menu, click **Dashboards**.
2. Choose the folder you want to add permissions for.

> **Note**
>
> It doesn’t matter which tab you’re on (Dashboards, Panels, or Alert rules); the folder permission you set applies to all.

2. Click **Manage permissions** from the Folder actions menu.
3. Update or add permissions as required.

## Data source permissions

By default, users with the basic roles Admin, Editor, and Viewer roles have query access to data sources for Grafana Alerting.

If you used fixed roles or custom roles, you need to update data source permissions to create rules or update rule queries.

Alternatively, an administrator can assign the role **Datasource Reader**, which grants the user access to all data sources.

To manage data source permissions, complete the following steps.

1. In the left-side menu, click **Connections** > **Data sources**.
2. Click the data source you want to change the permissions for.
3. Click the **Permissions** tab.
4. In the **Permission column**, update the permission, or remove it by clicking **X**.
