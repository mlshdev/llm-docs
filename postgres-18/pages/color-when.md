> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/color.sgml#color-when](https://www.postgresql.org/docs/18/color-when.html)

# When Color is Used

To use colorized output, set the environment variable `PG_COLOR` as follows:

1. If the value is `always`, then color is used.
2. If the value is `auto` and the standard error stream is associated with a terminal device, then color is used.
3. Otherwise, color is not used.
