> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-rewrite](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-rewrite)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-rewrite.html

# pg_rewrite

The catalog `pg_rewrite` stores rewrite rules for tables and views.

**pg_rewrite Columns**

`oid` `oid`

Row identifier

---

`rulename` `name`

Rule name

---

`ev_class` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The table this rule is for

---

`ev_type` `char`

Event type that the rule is for: 1 = [SELECT](./sql-select.md), 2 = [UPDATE](./sql-update.md), 3 = [INSERT](./sql-insert.md), 4 = [DELETE](./sql-delete.md)

---

`ev_enabled` `char`

Controls in which [Client Connection Defaults](./runtime-config-client.md#guc-session-replication-role) modes the rule fires. `O` = rule fires in “origin” and “local” modes, `D` = rule is disabled, `R` = rule fires in “replica” mode, `A` = rule fires always.

---

`is_instead` `bool`

True if the rule is an `INSTEAD` rule

---

`ev_qual` `pg_node_tree`

Expression tree (in the form of a `nodeToString()` representation) for the rule's qualifying condition

---

`ev_action` `pg_node_tree`

Query tree (in the form of a `nodeToString()` representation) for the rule's action

> **Note**
>
> `pg_class.relhasrules` must be true if a table has any rules in this catalog.
