> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-replication-origin-status](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-replication-origin-status)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-replication-origin-status.html

# pg_replication_origin_status

The `pg_replication_origin_status` view contains information about how far replay for a certain origin has progressed. For more on replication origins see [Replication Progress Tracking](./replication-origins.md).

**pg_replication_origin_status Columns**

`local_id` `oid` (references [`pg_replication_origin`](./catalog-pg-replication-origin.md).`roident`)

internal node identifier

---

`external_id` `text` (references [`pg_replication_origin`](./catalog-pg-replication-origin.md).`roname`)

external node identifier

---

`remote_lsn` `pg_lsn`

The origin node's LSN up to which data has been replicated.

---

`local_lsn` `pg_lsn`

This node's LSN at which `remote_lsn` has been replicated. Used to flush commit records before persisting data to disk when using asynchronous commits.
