> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-collations](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-collations)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-collations.html

# collations

The view `collations` contains the collations available in the current database.

**collations Columns**

`collation_catalog` `sql_identifier`

Name of the database containing the collation (always the current database)

---

`collation_schema` `sql_identifier`

Name of the schema containing the collation

---

`collation_name` `sql_identifier`

Name of the default collation

---

`pad_attribute` `character_data`

Always `NO PAD` (The alternative `PAD SPACE` is not supported by PostgreSQL.)
