> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-largeobject-metadata](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-largeobject-metadata)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-largeobject-metadata.html

# pg_largeobject_metadata

The catalog `pg_largeobject_metadata` holds metadata associated with large objects. The actual large object data is stored in [`pg_largeobject`](./catalog-pg-largeobject.md).

**pg_largeobject_metadata Columns**

`oid` `oid`

Row identifier

---

`lomowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the large object

---

`lomacl` `aclitem[]`

Access privileges; see [Privileges](./ddl-priv.md) for details
