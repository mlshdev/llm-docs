> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/information_schema.sgml#infoschema-column-domain-usage](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/information_schema.sgml%23infoschema-column-domain-usage)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-column-domain-usage.html

# column_domain_usage

The view `column_domain_usage` identifies all columns (of a table or a view) that make use of some domain defined in the current database and owned by a currently enabled role.

**column_domain_usage Columns**

`domain_catalog` `sql_identifier`

Name of the database containing the domain (always the current database)

---

`domain_schema` `sql_identifier`

Name of the schema containing the domain

---

`domain_name` `sql_identifier`

Name of the domain

---

`table_catalog` `sql_identifier`

Name of the database containing the table (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema containing the table

---

`table_name` `sql_identifier`

Name of the table

---

`column_name` `sql_identifier`

Name of the column
