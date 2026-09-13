> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-am](https://www.postgresql.org/docs/18/catalog-pg-am.html)

# pg_am

The catalog `pg_am` stores information about relation access methods. There is one row for each access method supported by the system. Currently, only tables and indexes have access methods. The requirements for table and index access methods are discussed in detail in [Table Access Method Interface Definition](./tableam.md) and [Index Access Method Interface Definition](./indexam.md) respectively.

**pg_am Columns**

`oid` `oid`

Row identifier

---

`amname` `name`

Name of the access method

---

`amhandler` `regproc` (references [`pg_proc`](./catalog-pg-proc.md).`oid`)

OID of a handler function that is responsible for supplying information about the access method

---

`amtype` `char`

`t` = table (including materialized views), `i` = index.

> **Note**
>
> Before PostgreSQL 9.6, `pg_am` contained many additional columns representing properties of index access methods. That data is now only directly visible at the C code level. However, `pg_index_column_has_property()` and related functions have been added to allow SQL queries to inspect index access method properties; see [System Catalog Information Functions](./functions-info.md#system-catalog-information-functions).
