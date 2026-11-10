> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/information_schema.sgml#infoschema-schemata](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/information_schema.sgml%23infoschema-schemata)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-schemata.html

# schemata

The view `schemata` contains all schemas in the current database that the current user has access to (by way of being the owner or having some privilege).

**schemata Columns**

`catalog_name` `sql_identifier`

Name of the database that the schema is contained in (always the current database)

---

`schema_name` `sql_identifier`

Name of the schema

---

`schema_owner` `sql_identifier`

Name of the owner of the schema

---

`default_character_set_catalog` `sql_identifier`

Applies to a feature not available in PostgreSQL

---

`default_character_set_schema` `sql_identifier`

Applies to a feature not available in PostgreSQL

---

`default_character_set_name` `sql_identifier`

Applies to a feature not available in PostgreSQL

---

`sql_path` `character_data`

Applies to a feature not available in PostgreSQL
