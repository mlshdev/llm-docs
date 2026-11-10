> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ref/drop_publication.sgml#sql-droppublication](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ref/drop_publication.sgml%23sql-droppublication)
> Canonical documentation: https://www.postgresql.org/docs/18/sql-droppublication.html

# DROP PUBLICATION

remove a publication

## Synopsis

```
DROP PUBLICATION [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```

## Description

`DROP PUBLICATION` removes an existing publication from the database.

A publication can only be dropped by its owner or a superuser.

## Parameters

**`IF EXISTS`**

  Do not throw an error if the publication does not exist. A notice is issued in this case.

**`name`**

  The name of an existing publication.

**`CASCADE`, `RESTRICT`**

  These key words do not have any effect, since there are no dependencies on publications.

## Examples

Drop a publication:

```sql
DROP PUBLICATION mypublication;
```

## Compatibility

`DROP PUBLICATION` is a PostgreSQL extension.

## See Also

- [CREATE PUBLICATION](./sql-createpublication.md)
- [ALTER PUBLICATION](./sql-alterpublication.md)
