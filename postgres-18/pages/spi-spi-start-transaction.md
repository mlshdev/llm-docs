> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-start-transaction](https://www.postgresql.org/docs/18/spi-spi-start-transaction.html)

# SPI_start_transaction

obsolete function

## Synopsis

```
void SPI_start_transaction(void)
```

## Description

`SPI_start_transaction` does nothing, and exists only for code compatibility with earlier PostgreSQL releases. It used to be required after calling `SPI_commit` or `SPI_rollback`, but now those functions start a new transaction automatically.
