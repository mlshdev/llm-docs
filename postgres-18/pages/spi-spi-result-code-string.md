> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-result-code-string](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-result-code-string)
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
