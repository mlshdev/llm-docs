> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/event-trigger.sgml#event-triggers](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/event-trigger.sgml%23event-triggers)
> Canonical documentation: https://www.postgresql.org/docs/18/event-triggers.html

# Event Triggers

To supplement the trigger mechanism discussed in [Triggers](./triggers.md), PostgreSQL also provides event triggers. Unlike regular triggers, which are attached to a single table and capture only DML events, event triggers are global to a particular database and are capable of capturing DDL events.

Like regular triggers, event triggers can be written in any procedural language that includes event trigger support, or in C, but not in plain SQL.
