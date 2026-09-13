> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-domain-constraints](https://www.postgresql.org/docs/18/infoschema-domain-constraints.html)

# domain_constraints

The view `domain_constraints` contains all constraints belonging to domains defined in the current database. Only those domains are shown that the current user has access to (by way of being the owner or having some privilege).

**domain_constraints Columns**

`constraint_catalog` `sql_identifier`

Name of the database that contains the constraint (always the current database)

---

`constraint_schema` `sql_identifier`

Name of the schema that contains the constraint

---

`constraint_name` `sql_identifier`

Name of the constraint

---

`domain_catalog` `sql_identifier`

Name of the database that contains the domain (always the current database)

---

`domain_schema` `sql_identifier`

Name of the schema that contains the domain

---

`domain_name` `sql_identifier`

Name of the domain

---

`is_deferrable` `yes_or_no`

`YES` if the constraint is deferrable, `NO` if not

---

`initially_deferred` `yes_or_no`

`YES` if the constraint is deferrable and initially deferred, `NO` if not
