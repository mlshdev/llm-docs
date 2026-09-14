> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/commit.sgml#sql-commit](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/commit.sgml%23sql-commit)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-commit.html

# COMMIT

commit the current transaction

## Synopsis

```
COMMIT [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]
```

## Description

`COMMIT` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs.

## Parameters

**`WORK`, `TRANSACTION`**

  Optional key words. They have no effect.

**`AND CHAIN`**

  If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [SET TRANSACTION](./sql-set-transaction.md)) as the just finished one. Otherwise, no new transaction is started.

## Notes

Use [ROLLBACK](./sql-rollback.md) to abort a transaction.

Issuing `COMMIT` when not inside a transaction does no harm, but it will provoke a warning message. `COMMIT AND CHAIN` when not inside a transaction is an error.

## Examples

To commit the current transaction and make all changes permanent:

```sql
COMMIT;
```

## Compatibility

The command `COMMIT` conforms to the SQL standard. The form `COMMIT TRANSACTION` is a PostgreSQL extension.

## See Also

- [BEGIN](./sql-begin.md)
- [ROLLBACK](./sql-rollback.md)
