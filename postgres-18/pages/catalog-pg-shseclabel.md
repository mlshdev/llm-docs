> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-shseclabel](https://www.postgresql.org/docs/18/catalog-pg-shseclabel.html)

# pg_shseclabel

The catalog `pg_shseclabel` stores security labels on shared database objects. Security labels can be manipulated with the [`SECURITY LABEL`](./sql-security-label.md) command. For an easier way to view security labels, see [pg_seclabels](./view-pg-seclabels.md).

See also [`pg_seclabel`](./catalog-pg-seclabel.md), which performs a similar function for security labels involving objects within a single database.

Unlike most system catalogs, `pg_shseclabel` is shared across all databases of a cluster: there is only one copy of `pg_shseclabel` per cluster, not one per database.

**pg_shseclabel Columns**

`objoid` `oid` (references any OID column)

The OID of the object this security label pertains to

---

`classoid` `oid` (references [`pg_class`](./catalog-pg-class.md).`oid`)

The OID of the system catalog this object appears in

---

`provider` `text`

The label provider associated with this label.

---

`label` `text`

The security label applied to this object.
