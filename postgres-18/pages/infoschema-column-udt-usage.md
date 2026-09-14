> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-column-udt-usage](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-column-udt-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-column-udt-usage.html

# column_udt_usage

The view `column_udt_usage` identifies all columns that use data types owned by a currently enabled role. Note that in PostgreSQL, built-in data types behave like user-defined types, so they are included here as well. See also [columns](./infoschema-columns.md) for details.

**column_udt_usage Columns**

`udt_catalog` `sql_identifier`

Name of the database that the column data type (the underlying type of the domain, if applicable) is defined in (always the current database)

---

`udt_schema` `sql_identifier`

Name of the schema that the column data type (the underlying type of the domain, if applicable) is defined in

---

`udt_name` `sql_identifier`

Name of the column data type (the underlying type of the domain, if applicable)

---

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

Name of the column
