> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-user-mapping-options](https://www.postgresql.org/docs/18/infoschema-user-mapping-options.html)

# user_mapping_options

The view `user_mapping_options` contains all the options defined for user mappings in the current database. Only those user mappings are shown where the current user has access to the corresponding foreign server (by way of being the owner or having some privilege).

**user_mapping_options Columns**

`authorization_identifier` `sql_identifier`

Name of the user being mapped, or `PUBLIC` if the mapping is public

---

`foreign_server_catalog` `sql_identifier`

Name of the database that the foreign server used by this mapping is defined in (always the current database)

---

`foreign_server_name` `sql_identifier`

Name of the foreign server used by this mapping

---

`option_name` `sql_identifier`

Name of an option

---

`option_value` `character_data`

Value of the option. This column will show as null unless the current user is the user being mapped, or the mapping is for `PUBLIC` and the current user is the server owner, or the current user is a superuser. The intent is to protect password information stored as user mapping option.
