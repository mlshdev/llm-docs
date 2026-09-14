> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-prepared-xacts](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-prepared-xacts)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-prepared-xacts.html

# pg_prepared_xacts

The view `pg_prepared_xacts` displays information about transactions that are currently prepared for two-phase commit (see [PREPARE TRANSACTION](./sql-prepare-transaction.md) for details).

`pg_prepared_xacts` contains one row per prepared transaction. An entry is removed when the transaction is committed or rolled back.

**pg_prepared_xacts Columns**

`transaction` `xid`

Numeric transaction identifier of the prepared transaction

---

`gid` `text`

Global transaction identifier that was assigned to the transaction

---

`prepared` `timestamptz`

Time at which the transaction was prepared for commit

---

`owner` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

Name of the user that executed the transaction

---

`database` `name` (references [`pg_database`](./catalog-pg-database.md).`datname`)

Name of the database in which the transaction was executed

When the `pg_prepared_xacts` view is accessed, the internal transaction manager data structures are momentarily locked, and a copy is made for the view to display. This ensures that the view produces a consistent set of results, while not blocking normal operations longer than necessary. Nonetheless there could be some impact on database performance if this view is frequently accessed.
