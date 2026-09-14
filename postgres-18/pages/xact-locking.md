> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/xact.sgml#xact-locking](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/xact.sgml%23xact-locking)
> Canonical documentation: https://www.postgresql.org/docs/18/xact-locking.html

# Transactions and Locking

The transaction IDs of currently executing transactions are shown in [`pg_locks`](./view-pg-locks.md) in columns `virtualxid` and `transactionid`. Read-only transactions will have `virtualxid`s but NULL `transactionid`s, while both columns will be set in read-write transactions.

Some lock types wait on `virtualxid`, while other types wait on `transactionid`. Row-level read and write locks are recorded directly in the locked rows and can be inspected using the [pgrowlocks — show a table's row locking information](./pgrowlocks.md) extension. Row-level read locks might also require the assignment of multixact IDs (`mxid`; see [Multixacts and Wraparound](./routine-vacuuming.md#multixacts-and-wraparound)).
