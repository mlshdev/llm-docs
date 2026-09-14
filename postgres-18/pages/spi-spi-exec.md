> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-exec](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-exec)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-exec.html

# SPI_exec

execute a read/write command

## Synopsis

```
int SPI_exec(const char * command, long count)
```

## Description

`SPI_exec` is the same as `SPI_execute`, with the latter's `read_only` parameter always taken as `false`.

## Arguments

**`const char command`**

  string containing command to execute

**`long count`**

  maximum number of rows to return, or `0` for no limit

## Return Value

See `SPI_execute`.
