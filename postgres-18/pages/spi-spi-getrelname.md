> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-getrelname](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-getrelname)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-getrelname.html

# SPI_getrelname

return the name of the specified relation

## Synopsis

```
char * SPI_getrelname(Relation rel)
```

## Description

`SPI_getrelname` returns a copy of the name of the specified relation. (You can use `pfree` to release the copy of the name when you don't need it anymore.)

## Arguments

**`Relation rel`**

  input relation

## Return Value

The name of the specified relation.
