> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/alter_event_trigger.sgml#sql-altereventtrigger](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/alter_event_trigger.sgml%23sql-altereventtrigger)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-altereventtrigger.html

# ALTER EVENT TRIGGER

change the definition of an event trigger

## Synopsis

```
ALTER EVENT TRIGGER name DISABLE
ALTER EVENT TRIGGER name ENABLE [ REPLICA | ALWAYS ]
ALTER EVENT TRIGGER name OWNER TO { new_owner | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER EVENT TRIGGER name RENAME TO new_name
```

## Description

`ALTER EVENT TRIGGER` changes properties of an existing event trigger.

You must be superuser to alter an event trigger.

## Parameters

**`name`**

  The name of an existing trigger to alter.

**`new_owner`**

  The user name of the new owner of the event trigger.

**`new_name`**

  The new name of the event trigger.

**`DISABLE`/`ENABLE [ REPLICA | ALWAYS ]`**

  These forms configure the firing of event triggers. A disabled trigger is still known to the system, but is not executed when its triggering event occurs. See also [Client Connection Defaults](./runtime-config-client.md#guc-session-replication-role).

## Compatibility

There is no `ALTER EVENT TRIGGER` statement in the SQL standard.

## See Also

- [CREATE EVENT TRIGGER](./sql-createeventtrigger.md)
- [DROP EVENT TRIGGER](./sql-dropeventtrigger.md)
