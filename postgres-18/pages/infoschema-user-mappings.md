> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-user-mappings](https://www.postgresql.org/docs/18/infoschema-user-mappings.html)

# user_mappings

The view `user_mappings` contains all user mappings defined in the current database. Only those user mappings are shown where the current user has access to the corresponding foreign server (by way of being the owner or having some privilege).

**user_mappings Columns**

`authorization_identifier` `sql_identifier`

Name of the user being mapped, or `PUBLIC` if the mapping is public

---

`foreign_server_catalog` `sql_identifier`

Name of the database that the foreign server used by this mapping is defined in (always the current database)

---

`foreign_server_name` `sql_identifier`

Name of the foreign server used by this mapping
