> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-triggered-update-columns](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-triggered-update-columns)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-triggered-update-columns.html

# triggered_update_columns

For triggers in the current database that specify a column list (like `UPDATE OF column1, column2`), the view `triggered_update_columns` identifies these columns. Triggers that do not specify a column list are not included in this view. Only those columns are shown that the current user owns or has some privilege other than `SELECT` on.

**triggered_update_columns Columns**

`trigger_catalog` `sql_identifier`

Name of the database that contains the trigger (always the current database)

---

`trigger_schema` `sql_identifier`

Name of the schema that contains the trigger

---

`trigger_name` `sql_identifier`

Name of the trigger

---

`event_object_catalog` `sql_identifier`

Name of the database that contains the table that the trigger is defined on (always the current database)

---

`event_object_schema` `sql_identifier`

Name of the schema that contains the table that the trigger is defined on

---

`event_object_table` `sql_identifier`

Name of the table that the trigger is defined on

---

`event_object_column` `sql_identifier`

Name of the column that the trigger is defined on
