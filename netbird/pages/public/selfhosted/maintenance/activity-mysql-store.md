> Release-pinned source for NetBird v0.76.2: [netbirdio/docs@447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e:src/pages/selfhosted/maintenance/activity-mysql-store.mdx](https://github.com/netbirdio/docs/blob/447d7ea30ab7e3e09ad7b03dc362bc6598e8dd6e/src/pages/selfhosted/maintenance/activity-mysql-store.mdx)

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
