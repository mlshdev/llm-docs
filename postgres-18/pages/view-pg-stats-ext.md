> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-stats-ext](https://www.postgresql.org/docs/18/view-pg-stats-ext.html)

# pg_stats_ext

The view `pg_stats_ext` provides access to information about each extended statistics object in the database, combining information stored in the [`pg_statistic_ext`](./catalog-pg-statistic-ext.md) and [`pg_statistic_ext_data`](./catalog-pg-statistic-ext-data.md) catalogs. This view allows access only to rows of [`pg_statistic_ext`](./catalog-pg-statistic-ext.md) and [`pg_statistic_ext_data`](./catalog-pg-statistic-ext-data.md) that correspond to tables the user owns, and therefore it is safe to allow public read access to this view.

`pg_stats_ext` is also designed to present the information in a more readable format than the underlying catalogs — at the cost that its schema must be extended whenever new types of extended statistics are added to [`pg_statistic_ext`](./catalog-pg-statistic-ext.md).

**pg_stats_ext Columns**

`schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing table

---

`tablename` `name` (references [`pg_class`](./catalog-pg-class.md).`relname`)

Name of table

---

`statistics_schemaname` `name` (references [`pg_namespace`](./catalog-pg-namespace.md).`nspname`)

Name of schema containing extended statistics object

---

`statistics_name` `name` (references [`pg_statistic_ext`](./catalog-pg-statistic-ext.md).`stxname`)

Name of extended statistics object

---

`statistics_owner` `name` (references [`pg_authid`](./catalog-pg-authid.md).`rolname`)

Owner of the extended statistics object

---

`attnames` `name[]` (references [`pg_attribute`](./catalog-pg-attribute.md).`attname`)

Names of the columns included in the extended statistics object

---

`exprs` `text[]`

Expressions included in the extended statistics object

---

`kinds` `char[]`

Types of extended statistics object enabled for this record

---

`inherited` `bool` (references [`pg_statistic_ext_data`](./catalog-pg-statistic-ext-data.md).`stxdinherit`)

If true, the stats include values from child tables, not just the values in the specified relation

---

`n_distinct` `pg_ndistinct`

N-distinct counts for combinations of column values. If greater than zero, the estimated number of distinct values in the combination. If less than zero, the negative of the number of distinct values divided by the number of rows. (The negated form is used when `ANALYZE` believes that the number of distinct values is likely to increase as the table grows; the positive form is used when the column seems to have a fixed number of possible values.) For example, -1 indicates a unique combination of columns in which the number of distinct combinations is the same as the number of rows.

---

`dependencies` `pg_dependencies`

Functional dependency statistics

---

`most_common_vals` `text[]`

A list of the most common combinations of values in the columns. (Null if no combinations seem to be more common than any others.)

---

`most_common_val_nulls` `bool[]`

A list of NULL flags for the most common combinations of values. (Null when `most_common_vals` is.)

---

`most_common_freqs` `float8[]`

A list of the frequencies of the most common combinations, i.e., number of occurrences of each divided by total number of rows. (Null when `most_common_vals` is.)

---

`most_common_base_freqs` `float8[]`

A list of the base frequencies of the most common combinations, i.e., product of per-value frequencies. (Null when `most_common_vals` is.)

The maximum number of entries in the array fields can be controlled on a column-by-column basis using the [`ALTER TABLE SET STATISTICS`](./sql-altertable.md) command, or globally by setting the [Query Planning](./runtime-config-query.md#guc-default-statistics-target) run-time parameter.
