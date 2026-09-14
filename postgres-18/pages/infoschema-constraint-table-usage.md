> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-constraint-table-usage](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-constraint-table-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-constraint-table-usage.html

# constraint_table_usage

The view `constraint_table_usage` identifies all tables in the current database that are used by some constraint and are owned by a currently enabled role. (This is different from the view `table_constraints`, which identifies all table constraints along with the table they are defined on.) For a foreign key constraint, this view identifies the table that the foreign key references. For a unique or primary key constraint, this view simply identifies the table the constraint belongs to. Check constraints and not-null constraints are not included in this view.

**constraint_table_usage Columns**

`table_catalog` `sql_identifier`

Name of the database that contains the table that is used by some constraint (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the table that is used by some constraint

---

`table_name` `sql_identifier`

Name of the table that is used by some constraint

---

`constraint_catalog` `sql_identifier`

Name of the database that contains the constraint (always the current database)

---

`constraint_schema` `sql_identifier`

Name of the schema that contains the constraint

---

`constraint_name` `sql_identifier`

Name of the constraint
