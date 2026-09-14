> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-collation-character-set-applicab](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-collation-character-set-applicab)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-collation-character-set-applicab.html

# collation_character_set_&#x200B;applicability

The view `collation_character_set_applicability` identifies which character set the available collations are applicable to. In PostgreSQL, there is only one character set per database (see explanation in [character_sets](./infoschema-character-sets.md)), so this view does not provide much useful information.

**collation_character_set_applicability Columns**

`collation_catalog` `sql_identifier`

Name of the database containing the collation (always the current database)

---

`collation_schema` `sql_identifier`

Name of the schema containing the collation

---

`collation_name` `sql_identifier`

Name of the default collation

---

`character_set_catalog` `sql_identifier`

Character sets are currently not implemented as schema objects, so this column is null

---

`character_set_schema` `sql_identifier`

Character sets are currently not implemented as schema objects, so this column is null

---

`character_set_name` `sql_identifier`

Name of the character set
