> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-transform](https://www.postgresql.org/docs/18/catalog-pg-transform.html)

# pg_transform

The catalog `pg_transform` stores information about transforms, which are a mechanism to adapt data types to procedural languages. See [CREATE TRANSFORM](./sql-createtransform.md) for more information.

**pg_transform Columns**

`oid` `oid`

Row identifier

---

`trftype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

OID of the data type this transform is for

---

`trflang` `oid` (references [`pg_language`](./catalog-pg-language.md).`oid`)

OID of the language this transform is for

---

`trffromsql` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

The OID of the function to use when converting the data type for input to the procedural language (e.g., function parameters). Zero is stored if the default behavior should be used.

---

`trftosql` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

The OID of the function to use when converting output from the procedural language (e.g., return values) to the data type. Zero is stored if the default behavior should be used.
