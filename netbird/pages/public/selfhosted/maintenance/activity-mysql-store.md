> Release-pinned source for NetBird v0.77.1: [netbirdio/docs@d905fda2a3f04a2066746875d09e51a3fe62dfed:src/pages/selfhosted/maintenance/activity-mysql-store.mdx](https://github.com/netbirdio/docs/blob/d905fda2a3f04a2066746875d09e51a3fe62dfed/src/pages/selfhosted/maintenance/activity-mysql-store.mdx)

# Activity Events MySQL store

## Using MySQL for fresh installations

To enable MySQL add to your management service the following environmental variable:

```bash
NB_ACTIVITY_EVENT_STORE_ENGINE=mysql
NB_ACTIVITY_EVENT_MYSQL_DSN="mysql://<username>:<password>@<host>:<port>/<db_name>"
```

You can switch back to sqlite storage by setting the `NB_ACTIVITY_EVENT_STORE_ENGINE` variable to `sqlite`.

> **Note**
>
> Switching between storage options requires migration steps to prevent data loss.
