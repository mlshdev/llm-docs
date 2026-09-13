> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-publication-rel](https://www.postgresql.org/docs/18/catalog-pg-publication-rel.html)

# pg_publication_rel

The catalog `pg_publication_rel` contains the mapping between relations and publications in the database. This is a many-to-many mapping. See also [pg_publication_tables](./view-pg-publication-tables.md) for a more user-friendly view of this information.

**pg_publication_rel Columns**

`oid` `oid`

Row identifier

---

`prpubid` `oid` (references [`pg_publication`](./catalog-pg-publication.md).`oid`)

Reference to publication

---

`prrelid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

Reference to relation

---

`prqual` `pg_node_tree`

Expression tree (in `nodeToString()` representation) for the relation's publication qualifying condition. Null if there is no publication qualifying condition.

---

`prattrs` `int2vector` (references [`pg_attribute`](./catalog-pg-attribute.md).`attnum`)

This is an array of values that indicates which table columns are part of the publication. For example, a value of `1 3` would mean that the first and the third table columns are published. A null value indicates that all columns are published.
