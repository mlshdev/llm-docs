> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/ecpg.sgml#ecpg-oracle-compat](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/ecpg.sgml%23ecpg-oracle-compat)
> Canonical documentation: https://www.postgresql.org/docs/18/ecpg-oracle-compat.html

# Oracle Compatibility Mode

`ecpg` can be run in a so-called *Oracle compatibility mode*. If this mode is active, it tries to behave as if it were Oracle Pro\*C.

Specifically, this mode changes `ecpg` in three ways:

- Pad character arrays receiving character string types with trailing spaces to the specified length
- Zero byte terminate these character arrays, and set the indicator variable if truncation occurs
- Set the null indicator to `-1` when character arrays receive empty character string types
