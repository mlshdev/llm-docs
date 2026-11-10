> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/appendix-obsolete-pgxlogdump.sgml#pgxlogdump](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/appendix-obsolete-pgxlogdump.sgml%23pgxlogdump)
> Canonical documentation: https://www.postgresql.org/docs/18/pgxlogdump.html

# pg_xlogdump renamed to pg_waldump

PostgreSQL 9.6 and below provided a command named `pg_xlogdump` to read write-ahead-log (WAL) files. This command was renamed to `pg_waldump`, see [pg_waldump](./pgwaldump.md) for documentation of `pg_waldump` and see [the release notes for PostgreSQL 10](./release-prior.md) for details on this change.
