> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-freeplan](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-freeplan)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-freeplan.html

# SPI_freeplan

free a previously saved prepared statement

## Synopsis

```
int SPI_freeplan(SPIPlanPtr plan)
```

## Description

`SPI_freeplan` releases a prepared statement previously returned by `SPI_prepare` or saved by `SPI_keepplan` or `SPI_saveplan`.

## Arguments

**`SPIPlanPtr plan`**

  pointer to statement to free

## Return Value

0 on success; `SPI_ERROR_ARGUMENT` if `plan` is `NULL` or invalid
