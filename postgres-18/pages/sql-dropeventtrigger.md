> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_event_trigger.sgml#sql-dropeventtrigger](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_event_trigger.sgml%23sql-dropeventtrigger)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropeventtrigger.html

# DROP EVENT TRIGGER

remove an event trigger

## Synopsis

```
DROP EVENT TRIGGER [ IF EXISTS ] name [ CASCADE | RESTRICT ]
```

## Description

`DROP EVENT TRIGGER` removes an existing event trigger. To execute this command, the current user must be the owner of the event trigger.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the event trigger does not exist. A notice is issued in this case.

**`name`**

  The name of the event trigger to remove.

**`CASCADE`**

  Automatically drop objects that depend on the trigger, and in turn all objects that depend on those objects (see [Dependency Tracking](./ddl-depend.md)).

**`RESTRICT`**

  Refuse to drop the trigger if any objects depend on it. This is the default.

## Examples

Destroy the trigger `snitch`:

```sql
DROP EVENT TRIGGER snitch;
```

## Compatibility

There is no `DROP EVENT TRIGGER` statement in the SQL standard.

## See Also

- [CREATE EVENT TRIGGER](./sql-createeventtrigger.md)
- [ALTER EVENT TRIGGER](./sql-altereventtrigger.md)
