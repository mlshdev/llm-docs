> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/logicaldecoding.sgml#logicaldecoding-sql](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/logicaldecoding.sgml%23logicaldecoding-sql)
> Canonical documentation: https://www.postgresql.org/docs/18/logicaldecoding-sql.html

# Logical Decoding SQL Interface

See [Replication Management Functions](./functions-admin.md#replication-management-functions) for detailed documentation on the SQL-level API for interacting with logical decoding.

Synchronous replication (see [Synchronous Replication](./warm-standby.md#synchronous-replication)) is only supported on replication slots used over the streaming replication interface. The function interface and additional, non-core interfaces do not support synchronous replication.
