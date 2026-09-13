> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-opclass](https://www.postgresql.org/docs/18/catalog-pg-opclass.html)

# pg_opclass

The catalog `pg_opclass` defines index access method operator classes. Each operator class defines semantics for index columns of a particular data type and a particular index access method. An operator class essentially specifies that a particular operator family is applicable to a particular indexable column data type. The set of operators from the family that are actually usable with the indexed column are whichever ones accept the column's data type as their left-hand input.

Operator classes are described at length in [Interfacing Extensions to Indexes](./xindex.md).

**pg_opclass Columns**

`oid` `oid`

Row identifier

---

`opcmethod` `oid` (references [`pg_am`](./catalog-pg-am.md).`oid`)

Index access method operator class is for

---

`opcname` `name`

Name of this operator class

---

`opcnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

Namespace of this operator class

---

`opcowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the operator class

---

`opcfamily` `oid` (references [`pg_opfamily`](./catalog-pg-opfamily.md).`oid`)

Operator family containing the operator class

---

`opcintype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Data type that the operator class indexes

---

`opcdefault` `bool`

True if this operator class is the default for `opcintype`

---

`opckeytype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Type of data stored in index, or zero if same as `opcintype`

An operator class's `opcmethod` must match the `opfmethod` of its containing operator family. Also, there must be no more than one `pg_opclass` row having `opcdefault` true for any given combination of `opcmethod` and `opcintype`.
