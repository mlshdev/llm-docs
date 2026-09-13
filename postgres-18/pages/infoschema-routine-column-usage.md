> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-routine-column-usage](https://www.postgresql.org/docs/18/infoschema-routine-column-usage.html)

# routine_column_usage

The view `routine_column_usage` identifies all columns that are used by a function or procedure, either in the SQL body or in parameter default expressions. (This only works for unquoted SQL bodies, not quoted bodies or functions in other languages.) A column is only included if its table is owned by a currently enabled role.

**routine_column_usage Columns**

`specific_catalog` `sql_identifier`

Name of the database containing the function (always the current database)

---

`specific_schema` `sql_identifier`

Name of the schema containing the function

---

`specific_name` `sql_identifier`

The “specific name” of the function. See [routines](./infoschema-routines.md) for more information.

---

`routine_catalog` `sql_identifier`

Name of the database containing the function (always the current database)

---

`routine_schema` `sql_identifier`

Name of the schema containing the function

---

`routine_name` `sql_identifier`

Name of the function (might be duplicated in case of overloading)

---

`table_catalog` `sql_identifier`

Name of the database that contains the table that is used by the function (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the table that is used by the function

---

`table_name` `sql_identifier`

Name of the table that is used by the function

---

`column_name` `sql_identifier`

Name of the column that is used by the function
