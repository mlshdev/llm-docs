> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-getargcount](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-getargcount)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-getargcount.html

# SPI_getargcount

return the number of arguments needed by a statement prepared by `SPI_prepare`

## Synopsis

```
int SPI_getargcount(SPIPlanPtr plan)
```

## Description

`SPI_getargcount` returns the number of arguments needed to execute a statement prepared by `SPI_prepare`.

## Arguments

**`SPIPlanPtr plan`**

  prepared statement (returned by `SPI_prepare`)

## Return Value

The count of expected arguments for the `plan`. If the `plan` is `NULL` or invalid, `SPI_result` is set to `SPI_ERROR_ARGUMENT` and -1 is returned.
