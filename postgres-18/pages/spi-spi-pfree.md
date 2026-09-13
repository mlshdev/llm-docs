> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-pfree](https://www.postgresql.org/docs/18/spi-spi-pfree.html)

# SPI_pfree

free memory in the upper executor context

## Synopsis

```
void SPI_pfree(void * pointer)
```

## Description

`SPI_pfree` frees memory previously allocated using `SPI_palloc` or `SPI_repalloc`.

This function is no longer different from plain `pfree`. It's kept just for backward compatibility of existing code.

## Arguments

**`void pointer`**

  pointer to existing storage to free
