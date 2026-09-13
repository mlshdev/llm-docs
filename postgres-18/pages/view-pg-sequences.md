> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-sequences](https://www.postgresql.org/docs/18/view-pg-sequences.html)

# pg_sequences

The view `pg_sequences` provides access to useful information about each sequence in the database.

**pg_sequences Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing sequence

---

`sequencename` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of sequence

---

`sequenceowner` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

Name of sequence's owner

---

`data_type` `regtype` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Data type of the sequence

---

`start_value` `int8`

Start value of the sequence

---

`min_value` `int8`

Minimum value of the sequence

---

`max_value` `int8`

Maximum value of the sequence

---

`increment_by` `int8`

Increment value of the sequence

---

`cycle` `bool`

Whether the sequence cycles

---

`cache_size` `int8`

Cache size of the sequence

---

`last_value` `int8`

The last sequence value written to disk. If caching is used, this value can be greater than the last value handed out from the sequence.

The `last_value` column will read as null if any of the following are true:

- The sequence has not been read from yet.
- The current user does not have `USAGE` or `SELECT` privilege on the sequence.
- The sequence is unlogged and the server is a standby.
