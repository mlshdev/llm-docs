> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/logicaldecoding.sgml#logicaldecoding](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/logicaldecoding.sgml%23logicaldecoding)
> Canonical documentation: https://www.postgresql.org/docs/18/logicaldecoding.html

# Logical Decoding

PostgreSQL provides infrastructure to stream the modifications performed via SQL to external consumers. This functionality can be used for a variety of purposes, including replication solutions and auditing.

Changes are sent out in streams identified by logical replication slots.

The format in which those changes are streamed is determined by the output plugin used. An example plugin is provided in the PostgreSQL distribution. Additional plugins can be written to extend the choice of available formats without modifying any core code. Every output plugin has access to each individual new row produced by `INSERT` and the new row version created by `UPDATE`. Availability of old row versions for `UPDATE` and `DELETE` depends on the configured replica identity (see [ALTER TABLE](./sql-altertable.md#sql-altertable-replica-identity)).

Changes can be consumed either using the streaming replication protocol (see [Streaming Replication Protocol](./protocol-replication.md) and [Streaming Replication Protocol Interface](./logicaldecoding-walsender.md)), or by calling functions via SQL (see [Logical Decoding SQL Interface](./logicaldecoding-sql.md)). It is also possible to write additional methods of consuming the output of a replication slot without modifying core code (see [Logical Decoding Output Writers](./logicaldecoding-writer.md)).
