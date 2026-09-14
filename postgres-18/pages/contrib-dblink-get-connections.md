> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/dblink.sgml#contrib-dblink-get-connections](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/dblink.sgml%23contrib-dblink-get-connections)
> Canonical documentation: https://www.postgresql.org/docs/18/contrib-dblink-get-connections.html

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
