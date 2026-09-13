> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-role-usage-grants](https://www.postgresql.org/docs/18/infoschema-role-usage-grants.html)

# role_usage_grants

The view `role_usage_grants` identifies `USAGE` privileges granted on various kinds of objects where the grantor or grantee is a currently enabled role. Further information can be found under `usage_privileges`. The only effective difference between this view and `usage_privileges` is that this view omits objects that have been made accessible to the current user by way of a grant to `PUBLIC`.

**role_usage_grants Columns**

`grantor` `sql_identifier`

The name of the role that granted the privilege

---

`grantee` `sql_identifier`

The name of the role that the privilege was granted to

---

`object_catalog` `sql_identifier`

Name of the database containing the object (always the current database)

---

`object_schema` `sql_identifier`

Name of the schema containing the object, if applicable, else an empty string

---

`object_name` `sql_identifier`

Name of the object

---

`object_type` `character_data`

`COLLATION` or `DOMAIN` or `FOREIGN DATA WRAPPER` or `FOREIGN SERVER` or `SEQUENCE`

---

`privilege_type` `character_data`

Always `USAGE`

---

`is_grantable` `yes_or_no`

`YES` if the privilege is grantable, `NO` if not
