> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/unlisten.sgml#sql-unlisten](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/unlisten.sgml%23sql-unlisten)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-unlisten.html

# UNLISTEN

stop listening for a notification

## Synopsis

```
UNLISTEN { channel | * }
```

## Description

`UNLISTEN` is used to remove an existing registration for `NOTIFY` events. `UNLISTEN` cancels any existing registration of the current PostgreSQL session as a listener on the notification channel named `channel`. The special wildcard `` cancels all listener registrations for the current session.

[NOTIFY](./sql-notify.md) contains a more extensive discussion of the use of `LISTEN` and `NOTIFY`.

## Parameters

**`channel`**

  Name of a notification channel (any identifier).

**``**

  All current listen registrations for this session are cleared.

## Notes

You can unlisten something you were not listening for; no warning or error will appear.

At the end of each session, `UNLISTEN ` is automatically executed.

A transaction that has executed `UNLISTEN` cannot be prepared for two-phase commit.

## Examples

To make a registration:

```sql
LISTEN virtual;
NOTIFY virtual;
Asynchronous notification "virtual" received from server process with PID 8448.
```

Once `UNLISTEN` has been executed, further `NOTIFY` messages will be ignored:

```sql
UNLISTEN virtual;
NOTIFY virtual;
-- no NOTIFY event is received
```

## Compatibility

There is no `UNLISTEN` command in the SQL standard.

## See Also

- [LISTEN](./sql-listen.md)
- [NOTIFY](./sql-notify.md)
