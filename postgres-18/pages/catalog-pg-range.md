> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-range](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-range)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-range.html

# pg_range

The catalog `pg_range` stores information about range types. This is in addition to the types' entries in [`pg_type`](./catalog-pg-type.md).

**pg_range Columns**

`rngtypid` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

OID of the range type

---

`rngsubtype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

OID of the element type (subtype) of this range type

---

`rngmultitypid` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

OID of the multirange type for this range type

---

`rngcollation` `oid` (references [`pg_collation`](./catalog-pg-collation.md).`oid`)

OID of the collation used for range comparisons, or zero if none

---

`rngsubopc` `oid` (references [`pg_opclass`](./catalog-pg-opclass.md).`oid`)

OID of the subtype's operator class used for range comparisons

---

`rngcanonical` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the function to convert a range value into canonical form, or zero if none

---

`rngsubdiff` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the function to return the difference between two element values as `double precision`, or zero if none

`rngsubopc` (plus `rngcollation`, if the element type is collatable) determines the sort ordering used by the range type. `rngcanonical` is used when the element type is discrete. `rngsubdiff` is optional but should be supplied to improve performance of GiST indexes on the range type.
