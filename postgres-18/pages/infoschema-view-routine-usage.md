> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-view-routine-usage](https://www.postgresql.org/docs/18/infoschema-view-routine-usage.html)

# view_routine_usage

The view `view_routine_usage` identifies all routines (functions and procedures) that are used in the query expression of a view (the `SELECT` statement that defines the view). A routine is only included if that routine is owned by a currently enabled role.

**view_routine_usage Columns**

`table_catalog` `sql_identifier`

Name of the database containing the view (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema containing the view

---

`table_name` `sql_identifier`

Name of the view

---

`specific_catalog` `sql_identifier`

Name of the database containing the function (always the current database)

---

`specific_schema` `sql_identifier`

Name of the schema containing the function

---

`specific_name` `sql_identifier`

The “specific name” of the function. See [routines](./infoschema-routines.md) for more information.
