> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ecpg.sgml#ecpg-sql-disconnect](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ecpg.sgml%23ecpg-sql-disconnect)
> Canonical documentation: https://www.postgresql.org/docs/18/ecpg-sql-disconnect.html

# DISCONNECT

terminate a database connection

## Synopsis

```
DISCONNECT connection_name
DISCONNECT [ CURRENT ]
DISCONNECT ALL
```

## Description

`DISCONNECT` closes a connection (or all connections) to the database.

## Parameters

**`connection_name`**

  A database connection name established by the `CONNECT` command.

**`CURRENT`**

  Close the “current” connection, which is either the most recently opened connection, or the connection set by the `SET CONNECTION` command. This is also the default if no argument is given to the `DISCONNECT` command.

**`ALL`**

  Close all open connections.

## Examples

```sql
int
main(void)
{
    EXEC SQL CONNECT TO testdb AS con1 USER testuser;
    EXEC SQL CONNECT TO testdb AS con2 USER testuser;
    EXEC SQL CONNECT TO testdb AS con3 USER testuser;

    EXEC SQL DISCONNECT CURRENT;  /* close con3          */
    EXEC SQL DISCONNECT ALL;      /* close con2 and con1 */

    return 0;
}
```

## Compatibility

`DISCONNECT` is specified in the SQL standard.

## See Also

- [CONNECT](./ecpg-sql-connect.md)
- [SET CONNECTION](./ecpg-sql-set-connection.md)
