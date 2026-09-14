> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-conversion](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-conversion)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-conversion.html

# pg_conversion

The catalog `pg_conversion` describes encoding conversion functions. See [CREATE CONVERSION](./sql-createconversion.md) for more information.

**pg_conversion Columns**

`oid` `oid`

Row identifier

---

`conname` `name`

Conversion name (unique within a namespace)

---

`connamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace that contains this conversion

---

`conowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the conversion

---

`conforencoding` `int4`

Source encoding ID ([`pg_encoding_to_char()`](./functions-info.md#pg-encoding-to-char) can translate this number to the encoding name)

---

`contoencoding` `int4`

Destination encoding ID ([`pg_encoding_to_char()`](./functions-info.md#pg-encoding-to-char) can translate this number to the encoding name)

---

`conproc` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

Conversion function

---

`condefault` `bool`

True if this is the default conversion
