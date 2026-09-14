> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/appendix-obsolete-pgreceivexlog.sgml#app-pgreceivexlog](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/appendix-obsolete-pgreceivexlog.sgml%23app-pgreceivexlog)
> Canonical documentation: https://www.postgresql.org/docs/18/app-pgreceivexlog.html

# pg_receivexlog renamed to pg_receivewal

PostgreSQL 9.6 and below provided a command named `pg_receivexlog` to fetch write-ahead-log (WAL) files. This command was renamed to `pg_receivewal`, see [pg_receivewal](./app-pgreceivewal.md) for documentation of `pg_receivewal` and see [the release notes for PostgreSQL 10](./release-prior.md) for details on this change.
