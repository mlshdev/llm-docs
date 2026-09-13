> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/dblink.sgml#contrib-dblink-cancel-query](https://www.postgresql.org/docs/18/contrib-dblink-cancel-query.html)

# dblink_cancel_query

cancels any active query on the named connection

## Synopsis

```
dblink_cancel_query(text connname) returns text
```

## Description

`dblink_cancel_query` attempts to cancel any query that is in progress on the named connection. Note that this is not certain to succeed (since, for example, the remote query might already have finished). A cancel request simply improves the odds that the query will fail soon. You must still complete the normal query protocol, for example by calling `dblink_get_result`.

## Arguments

**`connname`**

  Name of the connection to use.

## Return Value

Returns `OK` if the cancel request has been sent, or the text of an error message on failure.

## Examples

```sql
SELECT dblink_cancel_query('dtest1');
```
