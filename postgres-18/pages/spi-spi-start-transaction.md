> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-start-transaction](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-start-transaction)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-start-transaction.html

# SPI_start_transaction

obsolete function

## Synopsis

```
void SPI_start_transaction(void)
```

## Description

`SPI_start_transaction` does nothing, and exists only for code compatibility with earlier PostgreSQL releases. It used to be required after calling `SPI_commit` or `SPI_rollback`, but now those functions start a new transaction automatically.
