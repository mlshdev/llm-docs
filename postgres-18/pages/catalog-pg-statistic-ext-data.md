> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-statistic-ext-data](https://www.postgresql.org/docs/18/catalog-pg-statistic-ext-data.html)

# pg_statistic_ext_data

The catalog `pg_statistic_ext_data` holds data for extended planner statistics defined in [`pg_statistic_ext`](./catalog-pg-statistic-ext.md). Each row in this catalog corresponds to a *statistics object* created with [`CREATE STATISTICS`](./sql-createstatistics.md).

Normally there is one entry, with `stxdinherit` = `false`, for each statistics object that has been analyzed. If the table has inheritance children or partitions, a second entry with `stxdinherit` = `true` is also created. This row represents the statistics object over the inheritance tree, i.e., statistics for the data you'd see with `SELECT FROM table`, whereas the `stxdinherit` = `false` row represents the results of `SELECT FROM ONLY table`.

Like [`pg_statistic`](./catalog-pg-statistic.md), `pg_statistic_ext_data` should not be readable by the public, since the contents might be considered sensitive. (Example: most common combinations of values in columns might be quite interesting.) [`pg_stats_ext`](./view-pg-stats-ext.md) is a publicly readable view on `pg_statistic_ext_data` (after joining with [`pg_statistic_ext`](./catalog-pg-statistic-ext.md)) that only exposes information about tables the current user owns.

**pg_statistic_ext_data Columns**

`stxoid` `oid` (references [`pg_statistic_ext`](./catalog-pg-statistic-ext.md).`oid`)

Extended statistics object containing the definition for this data

---

`stxdinherit` `bool`

If true, the stats include values from child tables, not just the values in the specified relation

---

`stxdndistinct` `pg_ndistinct`

N-distinct counts, serialized as `pg_ndistinct` type

---

`stxddependencies` `pg_dependencies`

Functional dependency statistics, serialized as `pg_dependencies` type

---

`stxdmcv` `pg_mcv_list`

MCV (most-common values) list statistics, serialized as `pg_mcv_list` type

---

`stxdexpr` `pg_statistic[]`

Per-expression statistics, serialized as an array of `pg_statistic` type
