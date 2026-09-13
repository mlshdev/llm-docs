> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/dblink.sgml#contrib-dblink-get-connections](https://www.postgresql.org/docs/18/contrib-dblink-get-connections.html)

# dblink_get_connections

returns the names of all open named dblink connections

## Synopsis

```
dblink_get_connections() returns text[]
```

## Description

`dblink_get_connections` returns an array of the names of all open named `dblink` connections.

## Return Value

Returns a text array of connection names, or NULL if none.

## Examples

```sql
SELECT dblink_get_connections();
```
