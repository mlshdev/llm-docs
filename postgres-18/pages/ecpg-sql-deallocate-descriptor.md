> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ecpg.sgml#ecpg-sql-deallocate-descriptor](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ecpg.sgml%23ecpg-sql-deallocate-descriptor)
> Canonical documentation: https://www.postgresql.org/docs/18/ecpg-sql-deallocate-descriptor.html

# DEALLOCATE DESCRIPTOR

deallocate an SQL descriptor area

## Synopsis

```
DEALLOCATE DESCRIPTOR name
```

## Description

`DEALLOCATE DESCRIPTOR` deallocates a named SQL descriptor area.

## Parameters

**`name`**

  The name of the descriptor which is going to be deallocated. It is case sensitive. This can be an SQL identifier or a host variable.

## Examples

```sql
EXEC SQL DEALLOCATE DESCRIPTOR mydesc;
```

## Compatibility

`DEALLOCATE DESCRIPTOR` is specified in the SQL standard.

## See Also

- [ALLOCATE DESCRIPTOR](./ecpg-sql-allocate-descriptor.md)
- [GET DESCRIPTOR](./ecpg-sql-get-descriptor.md)
- [SET DESCRIPTOR](./ecpg-sql-set-descriptor.md)
