> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-getnspname](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-getnspname)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-getnspname.html

# SPI_getnspname

return the namespace of the specified relation

## Synopsis

```
char * SPI_getnspname(Relation rel)
```

## Description

`SPI_getnspname` returns a copy of the name of the namespace that the specified `Relation` belongs to. This is equivalent to the relation's schema. You should `pfree` the return value of this function when you are finished with it.

## Arguments

**`Relation rel`**

  input relation

## Return Value

The name of the specified relation's namespace.
