> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-cursor-close](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-cursor-close)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-cursor-close.html

# SPI_cursor_close

close a cursor

## Synopsis

```
void SPI_cursor_close(Portal portal)
```

## Description

`SPI_cursor_close` closes a previously created cursor and releases its portal storage.

All open cursors are closed automatically at the end of a transaction. `SPI_cursor_close` need only be invoked if it is desirable to release resources sooner.

## Arguments

**`Portal portal`**

  portal containing the cursor
