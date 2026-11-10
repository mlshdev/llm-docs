> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-cursor-open](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-cursor-open)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-cursor-open.html

# SPI_cursor_open

set up a cursor using a statement created with `SPI_prepare`

## Synopsis

```
Portal SPI_cursor_open(const char * name, SPIPlanPtr plan,
                       Datum * values, const char * nulls,
                       bool read_only)
```

## Description

`SPI_cursor_open` sets up a cursor (internally, a portal) that will execute a statement prepared by `SPI_prepare`. The parameters have the same meanings as the corresponding parameters to `SPI_execute_plan`.

Using a cursor instead of executing the statement directly has two benefits. First, the result rows can be retrieved a few at a time, avoiding memory overrun for queries that return many rows. Second, a portal can outlive the current C function (it can, in fact, live to the end of the current transaction). Returning the portal name to the C function's caller provides a way of returning a row set as result.

The passed-in parameter data will be copied into the cursor's portal, so it can be freed while the cursor still exists.

In most cases, a cursor remains until it is explicitly closed, even after the function returns. As an exception, if ephemeral named relations or transition tables are registered on the SPI connection with `SPI_register_relation` or `SPI_register_trigger_data`, all cursors are automatically closed when the function exits.

## Arguments

**`const char name`**

  name for portal, or `NULL` to let the system select a name

**`SPIPlanPtr plan`**

  prepared statement (returned by `SPI_prepare`)

**`Datum values`**

  An array of actual parameter values. Must have same length as the statement's number of arguments.

**`const char nulls`**

  An array describing which parameters are null. Must have same length as the statement's number of arguments.

  If `nulls` is `NULL` then `SPI_cursor_open` assumes that no parameters are null. Otherwise, each entry of the `nulls` array should be `' '` if the corresponding parameter value is non-null, or `'n'` if the corresponding parameter value is null. (In the latter case, the actual value in the corresponding `values` entry doesn't matter.) Note that `nulls` is not a text string, just an array: it does not need a `'\0'` terminator.

**`bool read_only`**

  `true` for read-only execution

## Return Value

Pointer to portal containing the cursor. Note there is no error return convention; any error will be reported via `elog`.
