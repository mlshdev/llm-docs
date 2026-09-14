> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/logicaldecoding.sgml#logicaldecoding-sql](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/logicaldecoding.sgml%23logicaldecoding-sql)
> Canonical documentation: https://www.postgresql.org/docs/18/logicaldecoding-sql.html

# Logical Decoding SQL Interface

See [Replication Management Functions](./functions-admin.md#replication-management-functions) for detailed documentation on the SQL-level API for interacting with logical decoding.

Synchronous replication (see [Synchronous Replication](./warm-standby.md#synchronous-replication)) is only supported on replication slots used over the streaming replication interface. The function interface and additional, non-core interfaces do not support synchronous replication.
