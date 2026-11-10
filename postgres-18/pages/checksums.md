> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/wal.sgml#checksums](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/wal.sgml%23checksums)
> Canonical documentation: https://www.postgresql.org/docs/18/checksums.html

# Data Checksums

By default, data pages are protected by checksums, but this can optionally be disabled for a cluster. When enabled, each data page includes a checksum that is updated when the page is written and verified each time the page is read. Only data pages are protected by checksums; internal data structures and temporary files are not.

Checksums can be disabled when the cluster is initialized using [`initdb`](./app-initdb.md#app-initdb-data-checksums). They can also be enabled or disabled at a later time as an offline operation. Data checksums are enabled or disabled at the full cluster level, and cannot be specified individually for databases or tables.

The current state of checksums in the cluster can be verified by viewing the value of the read-only configuration variable [Preset Options](./runtime-config-preset.md#guc-data-checksums) by issuing the command `SHOW data_checksums`.

When attempting to recover from page corruptions, it may be necessary to bypass the checksum protection. To do this, temporarily set the configuration parameter [Developer Options](./runtime-config-developer.md#guc-ignore-checksum-failure).

## Off-line Enabling of Checksums

The [`pg_checksums`](./app-pgchecksums.md) application can be used to enable or disable data checksums, as well as verify checksums, on an offline cluster.
