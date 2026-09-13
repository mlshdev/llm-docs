> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/plpython.sgml#plpython-do](https://www.postgresql.org/docs/18/plpython-do.html)

# Anonymous Code Blocks

PL/Python also supports anonymous code blocks called with the [DO](./sql-do.md) statement:

```sql
DO $$
    # PL/Python code
$$ LANGUAGE plpython3u;
```

An anonymous code block receives no arguments, and whatever value it might return is discarded. Otherwise it behaves just like a function.
