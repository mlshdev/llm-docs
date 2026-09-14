> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-gettype](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-gettype)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-gettype.html

# SPI_gettype

return the data type name of the specified column

## Synopsis

```
char * SPI_gettype(TupleDesc rowdesc, int colnumber)
```

## Description

`SPI_gettype` returns a copy of the data type name of the specified column. (You can use `pfree` to release the copy of the name when you don't need it anymore.)

## Arguments

**`TupleDesc rowdesc`**

  input row description

**`int colnumber`**

  column number (count starts at 1)

## Return Value

The data type name of the specified column, or `NULL` on error. `SPI_result` is set to `SPI_ERROR_NOATTRIBUTE` on error.
