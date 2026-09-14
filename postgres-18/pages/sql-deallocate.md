> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/deallocate.sgml#sql-deallocate](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/deallocate.sgml%23sql-deallocate)
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
