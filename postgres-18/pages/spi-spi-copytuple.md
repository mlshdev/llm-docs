> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-copytuple](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-copytuple)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-copytuple.html

# SPI_copytuple

make a copy of a row in the upper executor context

## Synopsis

```
HeapTuple SPI_copytuple(HeapTuple row)
```

## Description

`SPI_copytuple` makes a copy of a row in the upper executor context. This is normally used to return a modified row from a trigger. In a function declared to return a composite type, use `SPI_returntuple` instead.

This function can only be used while connected to SPI. Otherwise, it returns NULL and sets `SPI_result` to `SPI_ERROR_UNCONNECTED`.

## Arguments

**`HeapTuple row`**

  row to be copied

## Return Value

the copied row, or `NULL` on error (see `SPI_result` for an error indication)
