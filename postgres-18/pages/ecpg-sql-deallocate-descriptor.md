> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ecpg.sgml#ecpg-sql-deallocate-descriptor](https://www.postgresql.org/docs/18/ecpg-sql-deallocate-descriptor.html)

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
