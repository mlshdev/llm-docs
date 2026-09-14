> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/create_group.sgml#sql-creategroup](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/create_group.sgml%23sql-creategroup)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-creategroup.html

# CREATE GROUP

define a new database role

## Synopsis

```
CREATE GROUP name [ [ WITH ] option [ ... ] ]

where option can be:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT connlimit
    | [ ENCRYPTED ] PASSWORD 'password' | PASSWORD NULL
    | VALID UNTIL 'timestamp'
    | IN ROLE role_name [, ...]
    | IN GROUP role_name [, ...]
    | ROLE role_name [, ...]
    | ADMIN role_name [, ...]
    | USER role_name [, ...]
    | SYSID uid
```

## Description

`CREATE GROUP` is now an alias for [CREATE ROLE](./sql-createrole.md).

## Compatibility

There is no `CREATE GROUP` statement in the SQL standard.

## See Also

- [CREATE ROLE](./sql-createrole.md)
