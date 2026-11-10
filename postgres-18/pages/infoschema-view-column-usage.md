> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/information_schema.sgml#infoschema-view-column-usage](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/information_schema.sgml%23infoschema-view-column-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-view-column-usage.html

# view_column_usage

The view `view_column_usage` identifies all columns that are used in the query expression of a view (the `SELECT` statement that defines the view). A column is only included if the table that contains the column is owned by a currently enabled role.

> **Note**
>
> Columns of system tables are not included. This should be fixed sometime.

**view_column_usage Columns**

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

Name of the database that contains the table that contains the column that is used by the view (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the table that contains the column that is used by the view

---

`table_name` `sql_identifier`

Name of the table that contains the column that is used by the view

---

`column_name` `sql_identifier`

Name of the column that is used by the view
