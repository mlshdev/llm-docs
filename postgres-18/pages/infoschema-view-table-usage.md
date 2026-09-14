> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-view-table-usage](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-view-table-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-view-table-usage.html

# view_table_usage

The view `view_table_usage` identifies all tables that are used in the query expression of a view (the `SELECT` statement that defines the view). A table is only included if that table is owned by a currently enabled role.

> **Note**
>
> System tables are not included. This should be fixed sometime.

**view_table_usage Columns**

`view_catalog` `sql_identifier`

Name of the database that contains the view (always the current database)

---

`view_schema` `sql_identifier`

Name of the schema that contains the view

---

`view_name` `sql_identifier`

Name of the view

---

`table_catalog` `sql_identifier`

Name of the database that contains the table that is used by the view (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the table that is used by the view

---

`table_name` `sql_identifier`

Name of the table that is used by the view
