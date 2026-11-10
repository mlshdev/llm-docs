> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-cursor-fetch](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-cursor-fetch)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-cursor-fetch.html

# SPI_cursor_fetch

fetch some rows from a cursor

## Synopsis

```
void SPI_cursor_fetch(Portal portal, bool forward, long count)
```

## Description

`SPI_cursor_fetch` fetches some rows from a cursor. This is equivalent to a subset of the SQL command `FETCH` (see `SPI_scroll_cursor_fetch` for more functionality).

## Arguments

**`Portal portal`**

  portal containing the cursor

**`bool forward`**

  true for fetch forward, false for fetch backward

**`long count`**

  maximum number of rows to fetch

## Return Value

`SPI_processed` and `SPI_tuptable` are set as in `SPI_execute` if successful.

## Notes

Fetching backward may fail if the cursor's plan was not created with the `CURSOR_OPT_SCROLL` option.
