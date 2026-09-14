> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-indexes](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-indexes)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-indexes.html

# pg_indexes

The view `pg_indexes` provides access to useful information about each index in the database.

**pg_indexes Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing table and index

---

`tablename` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of table the index is for

---

`indexname` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of index

---

`tablespace` `name` (references [`pg_tablespace`](./catalog-pg-tablespace.md).`spcname`)

Name of tablespace containing index (null if default for database)

---

`indexdef` `text`

Index definition (a reconstructed [CREATE INDEX](./sql-createindex.md) command)
