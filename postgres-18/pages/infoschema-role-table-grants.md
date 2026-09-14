> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-role-table-grants](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-role-table-grants)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-role-table-grants.html

# role_table_grants

The view `role_table_grants` identifies all privileges granted on tables or views where the grantor or grantee is a currently enabled role. Further information can be found under `table_privileges`. The only effective difference between this view and `table_privileges` is that this view omits tables that have been made accessible to the current user by way of a grant to `PUBLIC`.

**role_table_grants Columns**

`grantor` `sql_identifier`

Name of the role that granted the privilege

---

`grantee` `sql_identifier`

Name of the role that the privilege was granted to

---

`table_catalog` `sql_identifier`

Name of the database that contains the table (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the table

---

`table_name` `sql_identifier`

Name of the table

---

`privilege_type` `character_data`

Type of the privilege: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, `REFERENCES`, or `TRIGGER`

---

`is_grantable` `yes_or_no`

`YES` if the privilege is grantable, `NO` if not

---

`with_hierarchy` `yes_or_no`

In the SQL standard, `WITH HIERARCHY OPTION` is a separate (sub-)privilege allowing certain operations on table inheritance hierarchies. In PostgreSQL, this is included in the `SELECT` privilege, so this column shows `YES` if the privilege is `SELECT`, else `NO`.
