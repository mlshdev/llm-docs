> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-sql-parts](https://www.postgresql.org/docs/18/infoschema-sql-parts.html)

# sql_parts

The table `sql_parts` contains information about which of the several parts of the SQL standard are supported by PostgreSQL.

**sql_parts Columns**

`feature_id` `character_data`

An identifier string containing the number of the part

---

`feature_name` `character_data`

Descriptive name of the part

---

`is_supported` `yes_or_no`

`YES` if the part is fully supported by the current version of PostgreSQL, `NO` if not

---

`is_verified_by` `character_data`

Always null, since the PostgreSQL development group does not perform formal testing of feature conformance

---

`comments` `character_data`

Possibly a comment about the supported status of the part
