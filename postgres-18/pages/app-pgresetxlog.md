> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/appendix-obsolete-pgresetxlog.sgml#app-pgresetxlog](https://www.postgresql.org/docs/18/app-pgresetxlog.html)

# pg_resetxlog renamed to pg_resetwal

PostgreSQL 9.6 and below provided a command named `pg_resetxlog` to reset the write-ahead-log (WAL) files. This command was renamed to `pg_resetwal`, see [pg_resetwal](./app-pgresetwal.md) for documentation of `pg_resetwal` and see [the release notes for PostgreSQL 10](./release-prior.md) for details on this change.
