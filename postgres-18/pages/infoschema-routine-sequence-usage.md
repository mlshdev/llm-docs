> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-routine-sequence-usage](https://www.postgresql.org/docs/18/infoschema-routine-sequence-usage.html)

# routine_sequence_usage

The view `routine_sequence_usage` identifies all sequences that are used by a function or procedure, either in the SQL body or in parameter default expressions. (This only works for unquoted SQL bodies, not quoted bodies or functions in other languages.) A sequence is only included if that sequence is owned by a currently enabled role.

**routine_sequence_usage Columns**

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

`schema_catalog` `sql_identifier`

Name of the database that contains the sequence that is used by the function (always the current database)

---

`sequence_schema` `sql_identifier`

Name of the schema that contains the sequence that is used by the function

---

`sequence_name` `sql_identifier`

Name of the sequence that is used by the function
