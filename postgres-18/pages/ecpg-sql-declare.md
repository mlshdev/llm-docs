> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/ecpg.sgml#ecpg-sql-declare](https://www.postgresql.org/docs/18/ecpg-sql-declare.html)

# DECLARE

define a cursor

## Synopsis

```
DECLARE cursor_name [ BINARY ] [ ASENSITIVE | INSENSITIVE ] [ [ NO ] SCROLL ] CURSOR [ { WITH | WITHOUT } HOLD ] FOR prepared_name
DECLARE cursor_name [ BINARY ] [ ASENSITIVE | INSENSITIVE ] [ [ NO ] SCROLL ] CURSOR [ { WITH | WITHOUT } HOLD ] FOR query
```

## Description

`DECLARE` declares a cursor for iterating over the result set of a prepared statement. This command has slightly different semantics from the direct SQL command `DECLARE`: Whereas the latter executes a query and prepares the result set for retrieval, this embedded SQL command merely declares a name as a “loop variable” for iterating over the result set of a query; the actual execution happens when the cursor is opened with the `OPEN` command.

## Parameters

**`cursor_name`**

  A cursor name, case sensitive. This can be an SQL identifier or a host variable.

**`prepared_name`**

  The name of a prepared query, either as an SQL identifier or a host variable.

**`query`**

  A [SELECT](./sql-select.md) or [VALUES](./sql-values.md) command which will provide the rows to be returned by the cursor.

For the meaning of the cursor options, see [DECLARE](./sql-declare.md).

## Examples

Examples declaring a cursor for a query:

```sql
EXEC SQL DECLARE C CURSOR FOR SELECT * FROM My_Table;
EXEC SQL DECLARE C CURSOR FOR SELECT Item1 FROM T;
EXEC SQL DECLARE cur1 CURSOR FOR SELECT version();
```

An example declaring a cursor for a prepared statement:

```sql
EXEC SQL PREPARE stmt1 AS SELECT version();
EXEC SQL DECLARE cur1 CURSOR FOR stmt1;
```

## Compatibility

`DECLARE` is specified in the SQL standard.

## See Also

- [OPEN](./ecpg-sql-open.md)
- [CLOSE](./sql-close.md)
- [DECLARE](./sql-declare.md)
