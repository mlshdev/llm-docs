> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/selfhosted/maintenance/activity-mysql-store.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/selfhosted/maintenance/activity-mysql-store.mdx)

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
