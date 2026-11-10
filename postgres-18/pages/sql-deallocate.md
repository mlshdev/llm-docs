> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/deallocate.sgml#sql-deallocate](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/deallocate.sgml%23sql-deallocate)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-deallocate.html

# DEALLOCATE

deallocate a prepared statement

## Synopsis

```
DEALLOCATE [ PREPARE ] { name | ALL }
```

## Description

`DEALLOCATE` is used to deallocate a previously prepared SQL statement. If you do not explicitly deallocate a prepared statement, it is deallocated when the session ends.

For more information on prepared statements, see [PREPARE](./sql-prepare.md).

## Parameters

**`PREPARE`**

  This key word is ignored.

**`name`**

  The name of the prepared statement to deallocate.

**`ALL`**

  Deallocate all prepared statements.

## Compatibility

The SQL standard includes a `DEALLOCATE` statement, but it is only for use in embedded SQL.

## See Also

- [EXECUTE](./sql-execute.md)
- [PREPARE](./sql-prepare.md)
