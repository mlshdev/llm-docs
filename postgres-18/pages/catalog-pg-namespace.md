> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-namespace](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-namespace)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-namespace.html

# pg_namespace

The catalog `pg_namespace` stores namespaces. A namespace is the structure underlying SQL schemas: each namespace can have a separate collection of relations, types, etc. without name conflicts.

**pg_namespace Columns**

`oid` `oid`

Row identifier

---

`nspname` `name`

Name of the namespace

---

`nspowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the namespace

---

`nspacl` `aclitem[]`

Access privileges; see [Privileges](./ddl-priv.md) for details
