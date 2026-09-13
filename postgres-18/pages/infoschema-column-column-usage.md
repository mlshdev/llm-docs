> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-column-column-usage](https://www.postgresql.org/docs/18/infoschema-column-column-usage.html)

# column_column_usage

The view `column_column_usage` identifies all generated columns that depend on another base column in the same table. Only tables owned by a currently enabled role are included.

**column_column_usage Columns**

`table_catalog` `sql_identifier`

Name of the database containing the table (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema containing the table

---

`table_name` `sql_identifier`

Name of the table

---

`column_name` `sql_identifier`

Name of the base column that a generated column depends on

---

`dependent_column` `sql_identifier`

Name of the generated column
