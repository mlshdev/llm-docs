> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-udt-privileges](https://www.postgresql.org/docs/18/infoschema-udt-privileges.html)

# udt_privileges

The view `udt_privileges` identifies `USAGE` privileges granted on user-defined types to a currently enabled role or by a currently enabled role. There is one row for each combination of type, grantor, and grantee. This view shows only composite types (see under [user_defined_types](./infoschema-user-defined-types.md) for why); see [usage_privileges](./infoschema-usage-privileges.md) for domain privileges.

**udt_privileges Columns**

`grantor` `sql_identifier`

Name of the role that granted the privilege

---

`grantee` `sql_identifier`

Name of the role that the privilege was granted to

---

`udt_catalog` `sql_identifier`

Name of the database containing the type (always the current database)

---

`udt_schema` `sql_identifier`

Name of the schema containing the type

---

`udt_name` `sql_identifier`

Name of the type

---

`privilege_type` `character_data`

Always `TYPE USAGE`

---

`is_grantable` `yes_or_no`

`YES` if the privilege is grantable, `NO` if not
