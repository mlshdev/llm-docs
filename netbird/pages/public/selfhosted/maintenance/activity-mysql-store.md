> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/selfhosted/maintenance/activity-mysql-store.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/selfhosted/maintenance/activity-mysql-store.mdx)

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
