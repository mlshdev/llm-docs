> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-tables](https://www.postgresql.org/docs/18/view-pg-tables.html)

# pg_tables

The view `pg_tables` provides access to useful information about each table in the database.

**pg_tables Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing table

---

`tablename` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of table

---

`tableowner` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

Name of table's owner

---

`tablespace` `name` (references [`pg_tablespace`](./catalog-pg-tablespace.md).`spcname`)

Name of tablespace containing table (null if default for database)

---

`hasindexes` `bool` (references [`pg_class`](./catalog-pg-class.md).`relhasindex`)

True if table has (or recently had) any indexes

---

`hasrules` `bool` (references [`pg_class`](./catalog-pg-class.md).`relhasrules`)

True if table has (or once had) rules

---

`hastriggers` `bool` (references [`pg_class`](./catalog-pg-class.md).`relhastriggers`)

True if table has (or once had) triggers

---

`rowsecurity` `bool` (references [`pg_class`](./catalog-pg-class.md).`relrowsecurity`)

True if row security is enabled on the table
