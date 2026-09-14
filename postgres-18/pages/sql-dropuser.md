> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_user.sgml#sql-dropuser](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_user.sgml%23sql-dropuser)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropuser.html

# DROP USER

remove a database role

## Synopsis

```
DROP USER [ IF EXISTS ] name [, ...]
```

## Description

`DROP USER` is simply an alternate spelling of [`DROP ROLE`](./sql-droprole.md).

## Compatibility

The `DROP USER` statement is a PostgreSQL extension. The SQL standard leaves the definition of users to the implementation.

## See Also

- [DROP ROLE](./sql-droprole.md)
