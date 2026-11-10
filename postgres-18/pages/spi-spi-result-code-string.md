> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-result-code-string](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-result-code-string)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-result-code-string.html

# SPI_result_code_string

return error code as string

## Synopsis

```
const char * SPI_result_code_string(int code);
```

## Description

`SPI_result_code_string` returns a string representation of the result code returned by various SPI functions or stored in `SPI_result`.

## Arguments

**`int code`**

  result code

## Return Value

A string representation of the result code.
