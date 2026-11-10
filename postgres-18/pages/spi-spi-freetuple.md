> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-freetuple](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-freetuple)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-freetuple.html

# SPI_freetuple

free a row allocated in the upper executor context

## Synopsis

```
void SPI_freetuple(HeapTuple row)
```

## Description

`SPI_freetuple` frees a row previously allocated in the upper executor context.

This function is no longer different from plain `heap_freetuple`. It's kept just for backward compatibility of existing code.

## Arguments

**`HeapTuple row`**

  row to free
