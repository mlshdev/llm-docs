> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-tablespace](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-tablespace)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-tablespace.html

# pg_tablespace

The catalog `pg_tablespace` stores information about the available tablespaces. Tables can be placed in particular tablespaces to aid administration of disk layout.

Unlike most system catalogs, `pg_tablespace` is shared across all databases of a cluster: there is only one copy of `pg_tablespace` per cluster, not one per database.

**pg_tablespace Columns**

`oid` `oid`

Row identifier

---

`spcname` `name`

Tablespace name

---

`spcowner` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

Owner of the tablespace, usually the user who created it

---

`spcacl` `aclitem[]`

Access privileges; see [Privileges](./ddl-priv.md) for details

---

`spcoptions` `text[]`

Tablespace-level options, as “keyword=value” strings
