> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-getbinval](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-getbinval)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-getbinval.html

# SPI_getbinval

return the binary value of the specified column

## Synopsis

```
Datum SPI_getbinval(HeapTuple row, TupleDesc rowdesc, int colnumber,
                    bool * isnull)
```

## Description

`SPI_getbinval` returns the value of the specified column in the internal form (as type `Datum`).

This function does not allocate new space for the datum. In the case of a pass-by-reference data type, the return value will be a pointer into the passed row.

## Arguments

**`HeapTuple row`**

  input row to be examined

**`TupleDesc rowdesc`**

  input row description

**`int colnumber`**

  column number (count starts at 1)

**`bool isnull`**

  flag for a null value in the column

## Return Value

The binary value of the column is returned. The variable pointed to by `isnull` is set to true if the column is null, else to false.

`SPI_result` is set to `SPI_ERROR_NOATTRIBUTE` on error.
