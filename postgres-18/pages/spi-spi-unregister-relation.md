> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-unregister-relation](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-unregister-relation)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-unregister-relation.html

# SPI_unregister_relation

remove an ephemeral named relation from the registry

## Synopsis

```
int SPI_unregister_relation(const char * name)
```

## Description

`SPI_unregister_relation` removes an ephemeral named relation from the registry for the current connection.

## Arguments

**`const char name`**

  the relation registry entry name

## Return Value

If the execution of the command was successful then the following (nonnegative) value will be returned:

**`SPI_OK_REL_UNREGISTER`**

  if the tuplestore has been successfully removed from the registry

On error, one of the following negative values is returned:

**`SPI_ERROR_ARGUMENT`**

  if `name` is `NULL`

**`SPI_ERROR_UNCONNECTED`**

  if called from an unconnected C function

**`SPI_ERROR_REL_NOT_FOUND`**

  if `name` is not found in the registry for the current connection
