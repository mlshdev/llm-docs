> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ecpg.sgml#ecpg-sql-set-autocommit](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ecpg.sgml%23ecpg-sql-set-autocommit)
> Canonical documentation: https://www.postgresql.org/docs/18/ecpg-sql-set-autocommit.html

# SET AUTOCOMMIT

set the autocommit behavior of the current session

## Synopsis

```
SET AUTOCOMMIT { = | TO } { ON | OFF }
```

## Description

`SET AUTOCOMMIT` sets the autocommit behavior of the current database session. By default, embedded SQL programs are *not* in autocommit mode, so `COMMIT` needs to be issued explicitly when desired. This command can change the session to autocommit mode, where each individual statement is committed implicitly.

## Compatibility

`SET AUTOCOMMIT` is an extension of PostgreSQL ECPG.
