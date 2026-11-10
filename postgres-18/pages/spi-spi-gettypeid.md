> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-gettypeid](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-gettypeid)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-gettypeid.html

# SPI_gettypeid

return the data type OID of the specified column

## Synopsis

```
Oid SPI_gettypeid(TupleDesc rowdesc, int colnumber)
```

## Description

`SPI_gettypeid` returns the OID of the data type of the specified column.

## Arguments

**`TupleDesc rowdesc`**

  input row description

**`int colnumber`**

  column number (count starts at 1)

## Return Value

The OID of the data type of the specified column or `InvalidOid` on error. On error, `SPI_result` is set to `SPI_ERROR_NOATTRIBUTE`.
