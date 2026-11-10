> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/information_schema.sgml#infoschema-routine-privileges](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/information_schema.sgml%23infoschema-routine-privileges)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-routine-privileges.html

# routine_privileges

The view `routine_privileges` identifies all privileges granted on functions to a currently enabled role or by a currently enabled role. There is one row for each combination of function, grantor, and grantee.

**routine_privileges Columns**

`grantor` `sql_identifier`

Name of the role that granted the privilege

---

`grantee` `sql_identifier`

Name of the role that the privilege was granted to

---

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

`privilege_type` `character_data`

Always `EXECUTE` (the only privilege type for functions)

---

`is_grantable` `yes_or_no`

`YES` if the privilege is grantable, `NO` if not
