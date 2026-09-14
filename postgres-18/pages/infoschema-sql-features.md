> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-sql-features](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-sql-features)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-sql-features.html

# sql_features

The table `sql_features` contains information about which formal features defined in the SQL standard are supported by PostgreSQL. This is the same information that is presented in [SQL Conformance](./features.md). There you can also find some additional background information.

**sql_features Columns**

`feature_id` `character_data`

Identifier string of the feature

---

`feature_name` `character_data`

Descriptive name of the feature

---

`sub_feature_id` `character_data`

Identifier string of the subfeature, or a zero-length string if not a subfeature

---

`sub_feature_name` `character_data`

Descriptive name of the subfeature, or a zero-length string if not a subfeature

---

`is_supported` `yes_or_no`

`YES` if the feature is fully supported by the current version of PostgreSQL, `NO` if not

---

`is_verified_by` `character_data`

Always null, since the PostgreSQL development group does not perform formal testing of feature conformance

---

`comments` `character_data`

Possibly a comment about the supported status of the feature
