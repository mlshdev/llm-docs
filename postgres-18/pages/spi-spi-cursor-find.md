> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/spi.sgml#spi-spi-cursor-find](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/spi.sgml%23spi-spi-cursor-find)
> Canonical documentation: https://www.postgresql.org/docs/18/spi-spi-cursor-find.html

# SPI_cursor_find

find an existing cursor by name

## Synopsis

```
Portal SPI_cursor_find(const char * name)
```

## Description

`SPI_cursor_find` finds an existing portal by name. This is primarily useful to resolve a cursor name returned as text by some other function.

## Arguments

**`const char name`**

  name of the portal

## Return Value

pointer to the portal with the specified name, or `NULL` if none was found

## Notes

Beware that this function can return a `Portal` object that does not have cursor-like properties; for example it might not return tuples. If you simply pass the `Portal` pointer to other SPI functions, they can defend themselves against such cases, but caution is appropriate when directly inspecting the `Portal`.
