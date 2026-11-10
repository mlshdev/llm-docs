> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-attrdef](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-attrdef)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-attrdef.html

# pg_attrdef

The catalog `pg_attrdef` stores column default expressions and generation expressions. The main information about columns is stored in [`pg_attribute`](./catalog-pg-attribute.md). Only columns for which a default expression or generation expression has been explicitly set will have an entry here.

**pg_attrdef Columns**

`oid` `oid`

Row identifier

---

`adrelid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The table this column belongs to

---

`adnum` `int2` (references [`pg_attribute`](./catalog-pg-attribute.md).`attnum`)

The number of the column

---

`adbin` `pg_node_tree`

The column default or generation expression, in `nodeToString()` representation. Use `pg_get_expr(adbin, adrelid)` to convert it to an SQL expression.
