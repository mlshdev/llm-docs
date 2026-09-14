> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-information-schema-catalog-name](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-information-schema-catalog-name)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-information-schema-catalog-name.html

# information_schema_catalog_name

`information_schema_catalog_name` is a table that always contains one row and one column containing the name of the current database (current catalog, in SQL terminology).

**information_schema_catalog_name Columns**

`catalog_name` `sql_identifier`

Name of the database that contains this information schema
