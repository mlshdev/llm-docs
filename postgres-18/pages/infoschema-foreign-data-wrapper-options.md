> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-foreign-data-wrapper-options](https://www.postgresql.org/docs/18/infoschema-foreign-data-wrapper-options.html)

# foreign_data_wrapper_options

The view `foreign_data_wrapper_options` contains all the options defined for foreign-data wrappers in the current database. Only those foreign-data wrappers are shown that the current user has access to (by way of being the owner or having some privilege).

**foreign_data_wrapper_options Columns**

`foreign_data_wrapper_catalog` `sql_identifier`

Name of the database that the foreign-data wrapper is defined in (always the current database)

---

`foreign_data_wrapper_name` `sql_identifier`

Name of the foreign-data wrapper

---

`option_name` `sql_identifier`

Name of an option

---

`option_value` `character_data`

Value of the option
