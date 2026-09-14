> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-views](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-views)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-views.html

# views

The view `views` contains all views defined in the current database. Only those views are shown that the current user has access to (by way of being the owner or having some privilege).

**views Columns**

`table_catalog` `sql_identifier`

Name of the database that contains the view (always the current database)

---

`table_schema` `sql_identifier`

Name of the schema that contains the view

---

`table_name` `sql_identifier`

Name of the view

---

`view_definition` `character_data`

Query expression defining the view (null if the view is not owned by a currently enabled role)

---

`check_option` `character_data`

`CASCADED` or `LOCAL` if the view has a `CHECK OPTION` defined on it, `NONE` if not

---

`is_updatable` `yes_or_no`

`YES` if the view is updatable (allows `UPDATE` and `DELETE`), `NO` if not

---

`is_insertable_into` `yes_or_no`

`YES` if the view is insertable into (allows `INSERT`), `NO` if not

---

`is_trigger_updatable` `yes_or_no`

`YES` if the view has an `INSTEAD OF` `UPDATE` trigger defined on it, `NO` if not

---

`is_trigger_deletable` `yes_or_no`

`YES` if the view has an `INSTEAD OF` `DELETE` trigger defined on it, `NO` if not

---

`is_trigger_insertable_into` `yes_or_no`

`YES` if the view has an `INSTEAD OF` `INSERT` trigger defined on it, `NO` if not
