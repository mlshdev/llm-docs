> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-getargtypeid](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-getargtypeid)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-getargtypeid.html

# SPI_getargtypeid

return the data type OID for an argument of a statement prepared by `SPI_prepare`

## Synopsis

```
Oid SPI_getargtypeid(SPIPlanPtr plan, int argIndex)
```

## Description

`SPI_getargtypeid` returns the OID representing the type for the `argIndex`'th argument of a statement prepared by `SPI_prepare`. First argument is at index zero.

## Arguments

**`SPIPlanPtr plan`**

  prepared statement (returned by `SPI_prepare`)

**`int argIndex`**

  zero based index of the argument

## Return Value

The type OID of the argument at the given index. If the `plan` is `NULL` or invalid, or `argIndex` is less than 0 or not less than the number of arguments declared for the `plan`, `SPI_result` is set to `SPI_ERROR_ARGUMENT` and `InvalidOid` is returned.
