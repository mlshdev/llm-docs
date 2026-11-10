> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-finish](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-finish)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-finish.html

# SPI_finish

disconnect a C function from the SPI manager

## Synopsis

```
int SPI_finish(void)
```

## Description

`SPI_finish` closes an existing connection to the SPI manager. You must call this function after completing the SPI operations needed during your C function's current invocation. You do not need to worry about making this happen, however, if you abort the transaction via `elog(ERROR)`. In that case SPI will clean itself up automatically.

## Return Value

**`SPI_OK_FINISH`**

  if properly disconnected

**`SPI_ERROR_UNCONNECTED`**

  if called from an unconnected C function
