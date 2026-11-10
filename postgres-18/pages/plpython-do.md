> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/plpython.sgml#plpython-do](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/plpython.sgml%23plpython-do)
> Canonical documentation: https://www.postgresql.org/docs/18/plpython-do.html

# Anonymous Code Blocks

PL/Python also supports anonymous code blocks called with the [DO](./sql-do.md) statement:

```sql
DO $$
    # PL/Python code
$$ LANGUAGE plpython3u;
```

An anonymous code block receives no arguments, and whatever value it might return is discarded. Otherwise it behaves just like a function.
