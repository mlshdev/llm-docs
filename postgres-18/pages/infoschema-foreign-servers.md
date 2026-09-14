> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-foreign-servers](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-foreign-servers)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-foreign-servers.html

# foreign_servers

The view `foreign_servers` contains all foreign servers defined in the current database. Only those foreign servers are shown that the current user has access to (by way of being the owner or having some privilege).

**foreign_servers Columns**

`foreign_server_catalog` `sql_identifier`

Name of the database that the foreign server is defined in (always the current database)

---

`foreign_server_name` `sql_identifier`

Name of the foreign server

---

`foreign_data_wrapper_catalog` `sql_identifier`

Name of the database that contains the foreign-data wrapper used by the foreign server (always the current database)

---

`foreign_data_wrapper_name` `sql_identifier`

Name of the foreign-data wrapper used by the foreign server

---

`foreign_server_type` `character_data`

Foreign server type information, if specified upon creation

---

`foreign_server_version` `character_data`

Foreign server version information, if specified upon creation

---

`authorization_identifier` `sql_identifier`

Name of the owner of the foreign server
