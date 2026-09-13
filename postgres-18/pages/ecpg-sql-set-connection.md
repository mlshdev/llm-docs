> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ecpg.sgml#ecpg-sql-set-connection](https://www.postgresql.org/docs/18/ecpg-sql-set-connection.html)

# SET CONNECTION

select a database connection

## Synopsis

```
SET CONNECTION [ TO | = ] connection_name
```

## Description

`SET CONNECTION` sets the “current” database connection, which is the one that all commands use unless overridden.

## Parameters

**`connection_name`**

  A database connection name established by the `CONNECT` command.

**`CURRENT`**

  Set the connection to the current connection (thus, nothing happens).

## Examples

```sql
EXEC SQL SET CONNECTION TO con2;
EXEC SQL SET CONNECTION = con1;
```

## Compatibility

`SET CONNECTION` is specified in the SQL standard.

## See Also

- [CONNECT](./ecpg-sql-connect.md)
- [DISCONNECT](./ecpg-sql-disconnect.md)
