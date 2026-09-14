> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-foreign-tables](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-foreign-tables)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-foreign-tables.html

# foreign_tables

The view `foreign_tables` contains all foreign tables defined in the current database. Only those foreign tables are shown that the current user has access to (by way of being the owner or having some privilege).

**foreign_tables Columns**

`foreign_table_catalog` `sql_identifier`

Name of the database that the foreign table is defined in (always the current database)

---

`foreign_table_schema` `sql_identifier`

Name of the schema that contains the foreign table

---

`foreign_table_name` `sql_identifier`

Name of the foreign table

---

`foreign_server_catalog` `sql_identifier`

Name of the database that the foreign server is defined in (always the current database)

---

`foreign_server_name` `sql_identifier`

Name of the foreign server
