> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-check-constraints](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-check-constraints)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-check-constraints.html

# check_constraints

The view `check_constraints` contains all check constraints, either defined on a table or on a domain, that are owned by a currently enabled role. (The owner of the table or domain is the owner of the constraint.)

The SQL standard considers not-null constraints to be check constraints with a `CHECK (column_name IS NOT NULL)` expression. So not-null constraints are also included here and don't have a separate view.

**check_constraints Columns**

`constraint_catalog` `sql_identifier`

Name of the database containing the constraint (always the current database)

---

`constraint_schema` `sql_identifier`

Name of the schema containing the constraint

---

`constraint_name` `sql_identifier`

Name of the constraint

---

`check_clause` `character_data`

The check expression of the check constraint
