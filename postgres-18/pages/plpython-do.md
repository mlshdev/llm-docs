> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/plpython.sgml#plpython-do](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/plpython.sgml%23plpython-do)
> Canonical documentation: https://www.postgresql.org/docs/18/plpython-do.html

# Anonymous Code Blocks

PL/Python also supports anonymous code blocks called with the [DO](./sql-do.md) statement:

```sql
DO $$
    # PL/Python code
$$ LANGUAGE plpython3u;
```

An anonymous code block receives no arguments, and whatever value it might return is discarded. Otherwise it behaves just like a function.
