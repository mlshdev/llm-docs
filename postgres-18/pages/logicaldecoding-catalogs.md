> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/logicaldecoding.sgml#logicaldecoding-catalogs](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/logicaldecoding.sgml%23logicaldecoding-catalogs)
> Canonical documentation: https://www.postgresql.org/docs/18/logicaldecoding-catalogs.html

# System Catalogs Related to Logical Decoding

The [`pg_replication_slots`](./view-pg-replication-slots.md) view and the [`pg_stat_replication`](./monitoring-stats.md#pgstatreplication) view provide information about the current state of replication slots and streaming replication connections respectively. These views apply to both physical and logical replication. The [`pg_stat_replication_slots`](./monitoring-stats.md#pgstatreplicationslots) view provides statistics information about the logical replication slots.
