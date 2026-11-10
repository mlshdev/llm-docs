> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/color.sgml#color-when](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/color.sgml%23color-when)
> Canonical documentation: https://www.postgresql.org/docs/18/color-when.html

# When Color is Used

To use colorized output, set the environment variable `PG_COLOR` as follows:

1. If the value is `always`, then color is used.
2. If the value is `auto` and the standard error stream is associated with a terminal device, then color is used.
3. Otherwise, color is not used.
