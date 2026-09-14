> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/rollback_prepared.sgml#sql-rollback-prepared](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/rollback_prepared.sgml%23sql-rollback-prepared)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-rollback-prepared.html

# ROLLBACK PREPARED

cancel a transaction that was earlier prepared for two-phase commit

## Synopsis

```
ROLLBACK PREPARED transaction_id
```

## Description

`ROLLBACK PREPARED` rolls back a transaction that is in prepared state.

## Parameters

**`transaction_id`**

  The transaction identifier of the transaction that is to be rolled back.

## Notes

To roll back a prepared transaction, you must be either the same user that executed the transaction originally, or a superuser. But you do not have to be in the same session that executed the transaction.

This command cannot be executed inside a transaction block. The prepared transaction is rolled back immediately.

All currently available prepared transactions are listed in the [`pg_prepared_xacts`](./view-pg-prepared-xacts.md) system view.

## Examples

Roll back the transaction identified by the transaction identifier `foobar`:

```sql
ROLLBACK PREPARED 'foobar';
```

## Compatibility

`ROLLBACK PREPARED` is a PostgreSQL extension. It is intended for use by external transaction management systems, some of which are covered by standards (such as X/Open XA), but the SQL side of those systems is not standardized.

## See Also

- [PREPARE TRANSACTION](./sql-prepare-transaction.md)
- [COMMIT PREPARED](./sql-commit-prepared.md)
