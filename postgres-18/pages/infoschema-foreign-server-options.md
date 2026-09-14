> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-foreign-server-options](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-foreign-server-options)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-foreign-server-options.html

# foreign_server_options

The view `foreign_server_options` contains all the options defined for foreign servers in the current database. Only those foreign servers are shown that the current user has access to (by way of being the owner or having some privilege).

**foreign_server_options Columns**

`foreign_server_catalog` `sql_identifier`

Name of the database that the foreign server is defined in (always the current database)

---

`foreign_server_name` `sql_identifier`

Name of the foreign server

---

`option_name` `sql_identifier`

Name of an option

---

`option_value` `character_data`

Value of the option
