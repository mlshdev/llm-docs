> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/information_schema.sgml#infoschema-check-constraint-routine-usage](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/information_schema.sgml%23infoschema-check-constraint-routine-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-check-constraint-routine-usage.html

# check_constraint_routine_usage

The view `check_constraint_routine_usage` identifies routines (functions and procedures) that are used by a check constraint. Only those routines are shown that are owned by a currently enabled role.

**check_constraint_routine_usage Columns**

`constraint_catalog` `sql_identifier`

Name of the database containing the constraint (always the current database)

---

`constraint_schema` `sql_identifier`

Name of the schema containing the constraint

---

`constraint_name` `sql_identifier`

Name of the constraint

---

`specific_catalog` `sql_identifier`

Name of the database containing the function (always the current database)

---

`specific_schema` `sql_identifier`

Name of the schema containing the function

---

`specific_name` `sql_identifier`

The “specific name” of the function. See [routines](./infoschema-routines.md) for more information.
