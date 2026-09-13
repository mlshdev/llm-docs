> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-matviews](https://www.postgresql.org/docs/18/view-pg-matviews.html)

# pg_matviews

The view `pg_matviews` provides access to useful information about each materialized view in the database.

**pg_matviews Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing materialized view

---

`matviewname` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of materialized view

---

`matviewowner` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

Name of materialized view's owner

---

`tablespace` `name` (references [`pg_tablespace`](./catalog-pg-tablespace.md).`spcname`)

Name of tablespace containing materialized view (null if default for database)

---

`hasindexes` `bool`

True if materialized view has (or recently had) any indexes

---

`ispopulated` `bool`

True if materialized view is currently populated

---

`definition` `text`

Materialized view definition (a reconstructed [SELECT](./sql-select.md) query)
