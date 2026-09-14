> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/appendix-obsolete-recovery-config.sgml#recovery-config](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/appendix-obsolete-recovery-config.sgml%23recovery-config)
> Canonical documentation: https://www.postgresql.org/docs/18/recovery-config.html

# recovery.conf file merged into postgresql.conf

PostgreSQL 11 and below used a configuration file named `recovery.conf` to manage replicas and standbys. Support for this file was removed in PostgreSQL 12. See [the release notes for PostgreSQL 12](./release-prior.md) for details on this change.

On PostgreSQL 12 and above, [archive recovery, streaming replication, and PITR](./continuous-archiving.md) are configured using [normal server configuration parameters](./runtime-config-replication.md#standby-servers). These are set in `postgresql.conf` or via [ALTER SYSTEM](./sql-altersystem.md) like any other parameter.

The server will not start if a `recovery.conf` exists.

PostgreSQL 15 and below had a setting `promote_trigger_file`, or `trigger_file` before 12. Use `pg_ctl promote` or call `pg_promote()` to promote a standby instead.

The `standby_mode` setting has been removed. A `standby.signal` file in the data directory is used instead. See [Standby Server Operation](./warm-standby.md#standby-server-operation) for details.
