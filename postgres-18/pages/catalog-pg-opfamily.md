> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-opfamily](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-opfamily)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-opfamily.html

# pg_opfamily

The catalog `pg_opfamily` defines operator families. Each operator family is a collection of operators and associated support routines that implement the semantics specified for a particular index access method. Furthermore, the operators in a family are all “compatible”, in a way that is specified by the access method. The operator family concept allows cross-data-type operators to be used with indexes and to be reasoned about using knowledge of access method semantics.

Operator families are described at length in [Interfacing Extensions to Indexes](./xindex.md).

**pg_opfamily Columns**

`oid` `oid`

Row identifier

---

`opfmethod` `oid` (references [`pg_am`](./catalog-pg-am.md).`oid`)

Index access method operator family is for

---

`opfname` `name`

Name of this operator family

---

`opfnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

Namespace of this operator family

---

`opfowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the operator family

The majority of the information defining an operator family is not in its `pg_opfamily` row, but in the associated rows in [`pg_amop`](./catalog-pg-amop.md), [`pg_amproc`](./catalog-pg-amproc.md), and [`pg_opclass`](./catalog-pg-opclass.md).
