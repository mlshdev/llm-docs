> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-constraint-column-usage](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-constraint-column-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-constraint-column-usage.html

# constraint_column_usage

The view `constraint_column_usage` identifies all columns in the current database that are used by some constraint. Only those columns are shown that are contained in a table owned by a currently enabled role. For a check constraint, this view identifies the columns that are used in the check expression. For a not-null constraint, this view identifies the column that the constraint is defined on. For a foreign key constraint, this view identifies the columns that the foreign key references. For a unique or primary key constraint, this view identifies the constrained columns.

**constraint_column_usage Columns**

`table_catalog` `sql_identifier`

Name of the database that contains the table that contains the column that is used by some constraint (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the table that contains the column that is used by some constraint

---

`table_name` `sql_identifier`

Name of the table that contains the column that is used by some constraint

---

`column_name` `sql_identifier`

Name of the column that is used by some constraint

---

`constraint_catalog` `sql_identifier`

Name of the database that contains the constraint (always the current database)

---

`constraint_schema` `sql_identifier`

Name of the schema that contains the constraint

---

`constraint_name` `sql_identifier`

Name of the constraint
