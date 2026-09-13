> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-table-constraints](https://www.postgresql.org/docs/18/infoschema-table-constraints.html)

# table_constraints

The view `table_constraints` contains all constraints belonging to tables that the current user owns or has some privilege other than `SELECT` on.

**table_constraints Columns**

`constraint_catalog` `sql_identifier`

Name of the database that contains the constraint (always the current database)

---

`constraint_schema` `sql_identifier`

Name of the schema that contains the constraint

---

`constraint_name` `sql_identifier`

Name of the constraint

---

`table_catalog` `sql_identifier`

Name of the database that contains the table (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the table

---

`table_name` `sql_identifier`

Name of the table

---

`constraint_type` `character_data`

Type of the constraint: `CHECK` (includes not-null constraints), `FOREIGN KEY`, `PRIMARY KEY`, or `UNIQUE`

---

`is_deferrable` `yes_or_no`

`YES` if the constraint is deferrable, `NO` if not

---

`initially_deferred` `yes_or_no`

`YES` if the constraint is deferrable and initially deferred, `NO` if not

---

`enforced` `yes_or_no`

`YES` if the constraint is enforced, `NO` if not

---

`nulls_distinct` `yes_or_no`

If the constraint is a unique constraint, then `YES` if the constraint treats nulls as distinct or `NO` if it treats nulls as not distinct, otherwise null for other types of constraints.
