> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-event-trigger](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-event-trigger)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-event-trigger.html

# pg_event_trigger

The catalog `pg_event_trigger` stores event triggers. See [Event Triggers](./event-triggers.md) for more information.

**pg_event_trigger Columns**

`oid` `oid`

Row identifier

---

`evtname` `name`

Trigger name (must be unique)

---

`evtevent` `name`

Identifies the event for which this trigger fires

---

`evtowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the event trigger

---

`evtfoid` `oid` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

The function to be called

---

`evtenabled` `char`

Controls in which [Client Connection Defaults](./runtime-config-client.md#guc-session-replication-role) modes the event trigger fires. `O` = trigger fires in “origin” and “local” modes, `D` = trigger is disabled, `R` = trigger fires in “replica” mode, `A` = trigger fires always.

---

`evttags` `text[]`

Command tags for which this trigger will fire. If NULL, the firing of this trigger is not restricted on the basis of the command tag.
