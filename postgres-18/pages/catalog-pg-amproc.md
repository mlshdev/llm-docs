> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-amproc](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-amproc)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-amproc.html

# pg_amproc

The catalog `pg_amproc` stores information about support functions associated with access method operator families. There is one row for each support function belonging to an operator family.

**pg_amproc Columns**

`oid` `oid`

Row identifier

---

`amprocfamily` `oid` (references [`pg_opfamily`](./catalog-pg-opfamily.md).`oid`)

The operator family this entry is for

---

`amproclefttype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Left-hand input data type of associated operator

---

`amprocrighttype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Right-hand input data type of associated operator

---

`amprocnum` `int2`

Support function number

---

`amproc` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of the function

The usual interpretation of the `amproclefttype` and `amprocrighttype` fields is that they identify the left and right input types of the operator(s) that a particular support function supports. For some access methods these match the input data type(s) of the support function itself, for others not. There is a notion of “default” support functions for an index, which are those with `amproclefttype` and `amprocrighttype` both equal to the index operator class's `opcintype`.
