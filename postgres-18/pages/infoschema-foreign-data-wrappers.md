> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-foreign-data-wrappers](https://www.postgresql.org/docs/18/infoschema-foreign-data-wrappers.html)

# foreign_data_wrappers

The view `foreign_data_wrappers` contains all foreign-data wrappers defined in the current database. Only those foreign-data wrappers are shown that the current user has access to (by way of being the owner or having some privilege).

**foreign_data_wrappers Columns**

`foreign_data_wrapper_catalog` `sql_identifier`

Name of the database that contains the foreign-data wrapper (always the current database)

---

`foreign_data_wrapper_name` `sql_identifier`

Name of the foreign-data wrapper

---

`authorization_identifier` `sql_identifier`

Name of the owner of the foreign server

---

`library_name` `character_data`

File name of the library that implementing this foreign-data wrapper

---

`foreign_data_wrapper_language` `character_data`

Language used to implement this foreign-data wrapper
