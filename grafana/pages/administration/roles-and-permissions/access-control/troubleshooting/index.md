> Release-pinned source for Grafana v13.2.0: [docs/sources/administration/roles-and-permissions/access-control/troubleshooting/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/administration/roles-and-permissions/access-control/troubleshooting/index.md)

# Troubleshooting RBAC

In this section, you’ll learn about logs that are available for RBAC and you’ll find the most common RBAC issues.

## Enable debug logging

You can enable debug log messages for RBAC in the Grafana configuration file. Debug logs are added to the Grafana server logs.

```bash
[log]
filters = accesscontrol:debug accesscontrol.evaluator:debug dashboard.permissions:debug
```

## Enable audit logging

> **Note**
>
> Available in [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/) and [Grafana Cloud](https://grafana.com/docs/grafana-cloud).

You can enable auditing in the Grafana configuration file.

```bash
[auditing]
enabled = true
```

All permission and role updates, and role assignments are added to audit logs.
Learn more about [access control audit logs](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-security/audit-grafana/#access-control).

## Missing dashboard, folder or data source permissions

[Dashboard and folder permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/#dashboard-permissions) and [data source permissions](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/#data-source-permissions) can go out of sync if a Grafana instance version is upgraded, downgraded and then upgraded again.
This happens when an instance is downgraded from a version that uses RBAC to a version that uses the legacy access control, and dashboard, folder or data source permissions are updated.
These permission updates will not be applied to RBAC, so permissions will be out of sync when the instance is next upgraded to a version with RBAC.

> **Note**
>
> the steps provided below will set all dashboard, folder and data source permissions to what they are set to with the legacy access control.
> If you have made dashboard, folder or data source permission updates with RBAC enabled, these updates will be wiped.

To resynchronize the permissions:

1. make a backup of your database
2. run the following SQL queries
   ```sql
   DELETE
   FROM builtin_role
   where role_id IN (SELECT id
                     FROM role
                     WHERE name LIKE 'managed:%');
   DELETE
   FROM team_role
   where role_id IN (SELECT id
                     FROM role
                     WHERE name LIKE 'managed:%');
   DELETE
   FROM user_role
   where role_id IN (SELECT id
                     FROM role
                     WHERE name LIKE 'managed:%');
   DELETE
   FROM permission
   where role_id IN (SELECT id
                     FROM role
                     WHERE name LIKE 'managed:%');
   DELETE
   FROM role
   WHERE name LIKE 'managed:%';
   DELETE
   FROM migration_log
   WHERE migration_id IN ('teams permissions migration',
                          'dashboard permissions',
                          'dashboard permissions uid scopes',
                          'data source permissions',
                          'data source uid permissions',
                          'managed permissions migration',
                          'managed folder permissions alert actions repeated migration',
                          'managed permissions migration enterprise');
   ```
3. restart your Grafana instance
