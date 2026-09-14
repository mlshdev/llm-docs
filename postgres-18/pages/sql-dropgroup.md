> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ref/drop_group.sgml#sql-dropgroup](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/ref/drop_group.sgml%23sql-dropgroup)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-dropgroup.html

# DROP GROUP

remove a database role

## Synopsis

```
DROP GROUP [ IF EXISTS ] name [, ...]
```

## Description

`DROP GROUP` is now an alias for [`DROP ROLE`](./sql-droprole.md).

## Compatibility

There is no `DROP GROUP` statement in the SQL standard.

## See Also

- [DROP ROLE](./sql-droprole.md)
