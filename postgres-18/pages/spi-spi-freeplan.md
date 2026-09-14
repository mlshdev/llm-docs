> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-freeplan](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-freeplan)
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
