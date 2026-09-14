> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-sequence](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-sequence)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-sequence.html

# pg_sequence

The catalog `pg_sequence` contains information about sequences. Some of the information about sequences, such as the name and the schema, is in [`pg_class`](./catalog-pg-class.md)

**pg_sequence Columns**

`seqrelid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the [`pg_class`](./catalog-pg-class.md) entry for this sequence

---

`seqtypid` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Data type of the sequence

---

`seqstart` `int8`

Start value of the sequence

---

`seqincrement` `int8`

Increment value of the sequence

---

`seqmax` `int8`

Maximum value of the sequence

---

`seqmin` `int8`

Minimum value of the sequence

---

`seqcache` `int8`

Cache size of the sequence

---

`seqcycle` `bool`

Whether the sequence cycles
