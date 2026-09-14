> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/spi.sgml#spi-spi-register-relation](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/spi.sgml%23spi-spi-register-relation)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-register-relation.html

# SPI_register_relation

make an ephemeral named relation available by name in SPI queries

## Synopsis

```
int SPI_register_relation(EphemeralNamedRelation enr)
```

## Description

`SPI_register_relation` makes an ephemeral named relation, with associated information, available to queries planned and executed through the current SPI connection.

## Arguments

**`EphemeralNamedRelation enr`**

  the ephemeral named relation registry entry

## Return Value

If the execution of the command was successful then the following (nonnegative) value will be returned:

**`SPI_OK_REL_REGISTER`**

  if the relation has been successfully registered by name

On error, one of the following negative values is returned:

**`SPI_ERROR_ARGUMENT`**

  if `enr` is `NULL` or its `name` field is `NULL`

**`SPI_ERROR_UNCONNECTED`**

  if called from an unconnected C function

**`SPI_ERROR_REL_DUPLICATE`**

  if the name specified in the `name` field of `enr` is already registered for this connection
