> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-partitioned-table](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-partitioned-table)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-partitioned-table.html

# pg_partitioned_table

The catalog `pg_partitioned_table` stores information about how tables are partitioned.

**pg_partitioned_table Columns**

`partrelid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the [`pg_class`](./catalog-pg-class.md) entry for this partitioned table

---

`partstrat` `char`

Partitioning strategy; `h` = hash partitioned table, `l` = list partitioned table, `r` = range partitioned table

---

`partnatts` `int2`

The number of columns in the partition key

---

`partdefid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the [`pg_class`](./catalog-pg-class.md) entry for the default partition of this partitioned table, or zero if this partitioned table does not have a default partition

---

`partattrs` `int2vector` (references [`pg_attribute`](./catalog-pg-attribute.md).`attnum`)

This is an array of `partnatts` values that indicate which table columns are part of the partition key. For example, a value of `1 3` would mean that the first and the third table columns make up the partition key. A zero in this array indicates that the corresponding partition key column is an expression, rather than a simple column reference.

---

`partclass` `oidvector` (references [`pg_opclass`](./catalog-pg-opclass.md).`oid`)

For each column in the partition key, this contains the OID of the operator class to use. See [`pg_opclass`](./catalog-pg-opclass.md) for details.

---

`partcollation` `oidvector` (references [`pg_collation`](./catalog-pg-collation.md).`oid`)

For each column in the partition key, this contains the OID of the collation to use for partitioning, or zero if the column is not of a collatable data type.

---

`partexprs` `pg_node_tree`

Expression trees (in `nodeToString()` representation) for partition key columns that are not simple column references. This is a list with one element for each zero entry in `partattrs`. Null if all partition key columns are simple references.
