> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/information_schema.sgml#infoschema-information-schema-catalog-name](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/information_schema.sgml%23infoschema-information-schema-catalog-name)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-information-schema-catalog-name.html

# information_schema_catalog_name

`information_schema_catalog_name` is a table that always contains one row and one column containing the name of the current database (current catalog, in SQL terminology).

**information_schema_catalog_name Columns**

`catalog_name` `sql_identifier`

Name of the database that contains this information schema
