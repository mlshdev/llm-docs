> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/dblink.sgml#contrib-dblink-is-busy](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/dblink.sgml%23contrib-dblink-is-busy)
> Canonical documentation: https://www.postgresql.org/docs/18/contrib-dblink-is-busy.html

# dblink_is_busy

checks if connection is busy with an async query

## Synopsis

```
dblink_is_busy(text connname) returns int
```

## Description

`dblink_is_busy` tests whether an async query is in progress.

## Arguments

**`connname`**

  Name of the connection to check.

## Return Value

Returns 1 if connection is busy, 0 if it is not busy. If this function returns 0, it is guaranteed that `dblink_get_result` will not block.

## Examples

```sql
SELECT dblink_is_busy('dtest1');
```
