> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-views](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-views)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-views.html

# pg_views

The view `pg_views` provides access to useful information about each view in the database.

**pg_views Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing view

---

`viewname` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of view

---

`viewowner` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

Name of view's owner

---

`definition` `text`

View definition (a reconstructed [SELECT](./sql-select.md) query)
