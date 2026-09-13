> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/logicaldecoding.sgml#logicaldecoding-walsender](https://www.postgresql.org/docs/18/logicaldecoding-walsender.html)

# Streaming Replication Protocol Interface

The commands

- `CREATE_REPLICATION_SLOT slot_name LOGICAL output_plugin`
- `DROP_REPLICATION_SLOT slot_name` [`WAIT`]
- `START_REPLICATION SLOT slot_name LOGICAL ...`

are used to create, drop, and stream changes from a replication slot, respectively. These commands are only available over a replication connection; they cannot be used via SQL. See [Streaming Replication Protocol](./protocol-replication.md) for details on these commands.

The command [pg_recvlogical](./app-pgrecvlogical.md) can be used to control logical decoding over a streaming replication connection. (It uses these commands internally.)
