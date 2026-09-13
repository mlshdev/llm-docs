> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-operator](https://www.postgresql.org/docs/18/catalog-pg-operator.html)

# pg_operator

The catalog `pg_operator` stores information about operators. See [CREATE OPERATOR](./sql-createoperator.md) and [User-Defined Operators](./xoper.md) for more information.

**pg_operator Columns**

`oid` `oid`

Row identifier

---

`oprname` `name`

Name of the operator

---

`oprnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace that contains this operator

---

`oprowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the operator

---

`oprkind` `char`

`b` = infix operator (“both”), or `l` = prefix operator (“left”)

---

`oprcanmerge` `bool`

This operator supports merge joins

---

`oprcanhash` `bool`

This operator supports hash joins

---

`oprleft` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Type of the left operand (zero for a prefix operator)

---

`oprright` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Type of the right operand

---

`oprresult` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

Type of the result (zero for a not-yet-defined “shell” operator)

---

`oprcom` `oid` (references [`pg_operator`](./catalog-pg-operator.md).`oid`)

Commutator of this operator (zero if none)

---

`oprnegate` `oid` (references [`pg_operator`](./catalog-pg-operator.md).`oid`)

Negator of this operator (zero if none)

---

`oprcode` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

Function that implements this operator (zero for a not-yet-defined “shell” operator)

---

`oprrest` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

Restriction selectivity estimation function for this operator (zero if none)

---

`oprjoin` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

Join selectivity estimation function for this operator (zero if none)
