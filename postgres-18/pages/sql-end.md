> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/end.sgml#sql-end](https://www.postgresql.org/docs/18/sql-end.html)

# END

commit the current transaction

## Synopsis

```
END [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]
```

## Description

`END` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs. This command is a PostgreSQL extension that is equivalent to [`COMMIT`](./sql-commit.md).

## Parameters

**`WORK`, `TRANSACTION`**

  Optional key words. They have no effect.

**`AND CHAIN`**

  If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [SET TRANSACTION](./sql-set-transaction.md)) as the just finished one. Otherwise, no new transaction is started.

## Notes

Use [`ROLLBACK`](./sql-rollback.md) to abort a transaction.

Issuing `END` when not inside a transaction does no harm, but it will provoke a warning message.

## Examples

To commit the current transaction and make all changes permanent:

```sql
END;
```

## Compatibility

`END` is a PostgreSQL extension that provides functionality equivalent to [`COMMIT`](./sql-commit.md), which is specified in the SQL standard.

## See Also

- [BEGIN](./sql-begin.md)
- [COMMIT](./sql-commit.md)
- [ROLLBACK](./sql-rollback.md)
