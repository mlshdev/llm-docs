> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-class](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-class)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-class.html

# pg_class

The catalog `pg_class` describes tables and other objects that have columns or are otherwise similar to a table. This includes indexes (but see also [`pg_index`](./catalog-pg-index.md)), sequences (but see also [`pg_sequence`](./catalog-pg-sequence.md)), views, materialized views, composite types, and TOAST tables; see `relkind`. Below, when we mean all of these kinds of objects we speak of “relations”. Not all of `pg_class`'s columns are meaningful for all relation kinds.

**pg_class Columns**

`oid` `oid`

Row identifier

---

`relname` `name`

Name of the table, index, view, etc.

---

`relnamespace` `oid` (references [`pg_namespace`](./catalog-pg-namespace.md).`oid`)

The OID of the namespace that contains this relation

---

`reltype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

The OID of the data type that corresponds to this table's row type, if any; zero for indexes, sequences, and toast tables, which have no `pg_type` entry

---

`reloftype` `oid` (references [`pg_type`](./catalog-pg-type.md).`oid`)

For typed tables, the OID of the underlying composite type; zero for all other relations

---

`relowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the relation

---

`relam` `oid` (references [`pg_am`](./catalog-pg-am.md).`oid`)

The access method used to access this table or index. Not meaningful if the relation is a sequence or has no on-disk file, except for partitioned tables, where, if set, it takes precedence over `default_table_access_method` when determining the access method to use for partitions created when one is not specified in the creation command.

---

`relfilenode` `oid`

Name of the on-disk file of this relation; zero means this is a “mapped” relation whose disk file name is determined by low-level state

---

`reltablespace` `oid` (references [`pg_tablespace`](./catalog-pg-tablespace.md).`oid`)

The tablespace in which this relation is stored. If zero, the database's default tablespace is implied. Not meaningful if the relation has no on-disk file, except for partitioned tables, where this is the tablespace in which partitions will be created when one is not specified in the creation command.

---

`relpages` `int4`

Size of the on-disk representation of this table in pages (of size `BLCKSZ`). This is only an estimate used by the planner. It is updated by [`VACUUM`](./sql-vacuum.md), [`ANALYZE`](./sql-analyze.md), and a few DDL commands such as [`CREATE INDEX`](./sql-createindex.md).

---

`reltuples` `float4`

Number of live rows in the table. This is only an estimate used by the planner. It is updated by [`VACUUM`](./sql-vacuum.md), [`ANALYZE`](./sql-analyze.md), and a few DDL commands such as [`CREATE INDEX`](./sql-createindex.md). If the table has never yet been vacuumed or analyzed, `reltuples` contains `-1` indicating that the row count is unknown.

---

`relallvisible` `int4`

Number of pages that are marked all-visible in the table's visibility map. This is only an estimate used by the planner. It is updated by [`VACUUM`](./sql-vacuum.md), [`ANALYZE`](./sql-analyze.md), and a few DDL commands such as [`CREATE INDEX`](./sql-createindex.md).

---

`relallfrozen` `int4`

Number of pages that are marked all-frozen in the table's visibility map. This is only an estimate used for triggering autovacuums. It can also be used along with `relallvisible` for scheduling manual vacuums and tuning [vacuum's freezing behavior](./runtime-config-vacuum.md#freezing). It is updated by [`VACUUM`](./sql-vacuum.md), [`ANALYZE`](./sql-analyze.md), and a few DDL commands such as [`CREATE INDEX`](./sql-createindex.md).

---

`reltoastrelid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

OID of the TOAST table associated with this table, zero if none. The TOAST table stores large attributes “out of line” in a secondary table.

---

`relhasindex` `bool`

True if this is a table and it has (or recently had) any indexes

---

`relisshared` `bool`

True if this table is shared across all databases in the cluster. Only certain system catalogs (such as [`pg_database`](./catalog-pg-database.md)) are shared.

---

`relpersistence` `char`

`p` = permanent table/sequence, `u` = unlogged table/sequence, `t` = temporary table/sequence

---

`relkind` `char`

`r` = ordinary table, `i` = index, `S` = sequence, `t` = TOAST table, `v` = view, `m` = materialized view, `c` = composite type, `f` = foreign table, `p` = partitioned table, `I` = partitioned index

---

`relnatts` `int2`

Number of user columns in the relation (system columns not counted). There must be this many corresponding entries in [`pg_attribute`](./catalog-pg-attribute.md). See also `pg_attribute`.`attnum`.

---

`relchecks` `int2`

Number of `CHECK` constraints on the table; see [`pg_constraint`](./catalog-pg-constraint.md) catalog

---

`relhasrules` `bool`

True if table has (or once had) rules; see [`pg_rewrite`](./catalog-pg-rewrite.md) catalog

---

`relhastriggers` `bool`

True if table has (or once had) triggers; see [`pg_trigger`](./catalog-pg-trigger.md) catalog

---

`relhassubclass` `bool`

True if table or index has (or once had) any inheritance children or partitions

---

`relrowsecurity` `bool`

True if table has row-level security enabled; see [`pg_policy`](./catalog-pg-policy.md) catalog

---

`relforcerowsecurity` `bool`

True if row-level security (when enabled) will also apply to table owner; see [`pg_policy`](./catalog-pg-policy.md) catalog

---

`relispopulated` `bool`

True if relation is populated (this is true for all relations other than some materialized views)

---

`relreplident` `char`

Columns used to form “replica identity” for rows: `d` = default (primary key, if any), `n` = nothing, `f` = all columns, `i` = index with `indisreplident` set (same as nothing if the index used has been dropped)

---

`relispartition` `bool`

True if table or index is a partition

---

`relrewrite` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

For new relations being written during a DDL operation that requires a table rewrite, this contains the OID of the original relation; otherwise zero. That state is only visible internally; this field should never contain anything other than zero for a user-visible relation.

---

`relfrozenxid` `xid`

All transaction IDs before this one have been replaced with a permanent (“frozen”) transaction ID in this table. This is used to track whether the table needs to be vacuumed in order to prevent transaction ID wraparound or to allow `pg_xact` to be shrunk. Zero (`InvalidTransactionId`) if the relation is not a table.

---

`relminmxid` `xid`

All multixact IDs before this one have been replaced by a transaction ID in this table. This is used to track whether the table needs to be vacuumed in order to prevent multixact ID wraparound or to allow `pg_multixact` to be shrunk. Zero (`InvalidMultiXactId`) if the relation is not a table.

---

`relacl` `aclitem[]`

Access privileges; see [Privileges](./ddl-priv.md) for details

---

`reloptions` `text[]`

Access-method-specific options, as “keyword=value” strings

---

`relpartbound` `pg_node_tree`

If table is a partition (see `relispartition`), internal representation of the partition bound

Several of the Boolean flags in `pg_class` are maintained lazily: they are guaranteed to be true if that's the correct state, but may not be reset to false immediately when the condition is no longer true. For example, `relhasindex` is set by [`CREATE INDEX`](./sql-createindex.md), but it is never cleared by [`DROP INDEX`](./sql-dropindex.md). Instead, [`VACUUM`](./sql-vacuum.md) clears `relhasindex` if it finds the table has no indexes. This arrangement avoids race conditions and improves concurrency.
