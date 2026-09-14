> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-publication-tables](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-publication-tables)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-publication-tables.html

# pg_publication_tables

The view `pg_publication_tables` provides information about the mapping between publications and information of tables they contain. Unlike the underlying catalog [`pg_publication_rel`](./catalog-pg-publication-rel.md), this view expands publications defined as [`FOR ALL TABLES`](./sql-createpublication.md#sql-createpublication-params-for-all-tables) and [`FOR TABLES IN SCHEMA`](./sql-createpublication.md#sql-createpublication-params-for-tables-in-schema), so for such publications there will be a row for each eligible table.

**pg_publication_tables Columns**

`pubname` `name` (references [`pg_publication`](./catalog-pg-publication.md).`pubname`)

Name of publication

---

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing table

---

`tablename` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of table

---

`attnames` `name[]` (references [`pg_attribute`](./catalog-pg-attribute.md).`attname`)

Names of table columns included in the publication. This contains all the columns of the table when the user didn't specify the column list for the table.

---

`rowfilter` `text`

Expression for the table's publication qualifying condition
