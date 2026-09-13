> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/abort.sgml#sql-abort](https://www.postgresql.org/docs/18/sql-abort.html)

# ABORT

abort the current transaction

## Synopsis

```
ABORT [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]
```

## Description

`ABORT` rolls back the current transaction and causes all the updates made by the transaction to be discarded. This command is identical in behavior to the standard SQL command [`ROLLBACK`](./sql-rollback.md), and is present only for historical reasons.

## Parameters

**`WORK`, `TRANSACTION`**

  Optional key words. They have no effect.

**`AND CHAIN`**

  If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [`SET TRANSACTION`](./sql-set-transaction.md)) as the just finished one. Otherwise, no new transaction is started.

## Notes

Use [`COMMIT`](./sql-commit.md) to successfully terminate a transaction.

Issuing `ABORT` outside of a transaction block emits a warning and otherwise has no effect.

## Examples

To abort all changes:

```sql
ABORT;
```

## Compatibility

This command is a PostgreSQL extension present for historical reasons. `ROLLBACK` is the equivalent standard SQL command.

## See Also

- [BEGIN](./sql-begin.md)
- [COMMIT](./sql-commit.md)
- [ROLLBACK](./sql-rollback.md)
