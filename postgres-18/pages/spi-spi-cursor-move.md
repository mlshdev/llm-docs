> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-cursor-move](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-cursor-move)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-cursor-move.html

# SPI_cursor_move

move a cursor

## Synopsis

```
void SPI_cursor_move(Portal portal, bool forward, long count)
```

## Description

`SPI_cursor_move` skips over some number of rows in a cursor. This is equivalent to a subset of the SQL command `MOVE` (see `SPI_scroll_cursor_move` for more functionality).

## Arguments

**`Portal portal`**

  portal containing the cursor

**`bool forward`**

  true for move forward, false for move backward

**`long count`**

  maximum number of rows to move

## Notes

Moving backward may fail if the cursor's plan was not created with the `CURSOR_OPT_SCROLL` option.
