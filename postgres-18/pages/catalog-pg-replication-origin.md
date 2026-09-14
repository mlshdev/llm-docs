> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-replication-origin](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-replication-origin)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-replication-origin.html

# pg_replication_origin

The `pg_replication_origin` catalog contains all replication origins created. For more on replication origins see [Replication Progress Tracking](./replication-origins.md).

Unlike most system catalogs, `pg_replication_origin` is shared across all databases of a cluster: there is only one copy of `pg_replication_origin` per cluster, not one per database.

**pg_replication_origin Columns**

`roident` `oid`

A unique, cluster-wide identifier for the replication origin. Should never leave the system.

---

`roname` `text`

The external, user defined, name of a replication origin.
