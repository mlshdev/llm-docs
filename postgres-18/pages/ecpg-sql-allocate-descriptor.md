> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ecpg.sgml#ecpg-sql-allocate-descriptor](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ecpg.sgml%23ecpg-sql-allocate-descriptor)
> Canonical documentation: https://www.postgresql.org/docs/18/ecpg-sql-allocate-descriptor.html

# ALLOCATE DESCRIPTOR

allocate an SQL descriptor area

## Synopsis

```
ALLOCATE DESCRIPTOR name
```

## Description

`ALLOCATE DESCRIPTOR` allocates a new named SQL descriptor area, which can be used to exchange data between the PostgreSQL server and the host program.

Descriptor areas should be freed after use using the `DEALLOCATE DESCRIPTOR` command.

## Parameters

**`name`**

  A name of SQL descriptor, case sensitive. This can be an SQL identifier or a host variable.

## Examples

```sql
EXEC SQL ALLOCATE DESCRIPTOR mydesc;
```

## Compatibility

`ALLOCATE DESCRIPTOR` is specified in the SQL standard.

## See Also

- [DEALLOCATE DESCRIPTOR](./ecpg-sql-deallocate-descriptor.md)
- [GET DESCRIPTOR](./ecpg-sql-get-descriptor.md)
- [SET DESCRIPTOR](./ecpg-sql-set-descriptor.md)
