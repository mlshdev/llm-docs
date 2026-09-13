> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-rules](https://www.postgresql.org/docs/18/view-pg-rules.html)

# pg_rules

The view `pg_rules` provides access to useful information about query rewrite rules.

**pg_rules Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing table

---

`tablename` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of table the rule is for

---

`rulename` `name` (references [`pg_rewrite`](./catalog-pg-rewrite.md).`rulename`)

Name of rule

---

`definition` `text`

Rule definition (a reconstructed creation command)

The `pg_rules` view excludes the `ON SELECT` rules of views and materialized views; those can be seen in [`pg_views`](./view-pg-views.md) and [`pg_matviews`](./view-pg-matviews.md).
