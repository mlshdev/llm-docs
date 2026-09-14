> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-parameter-acl](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-parameter-acl)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-parameter-acl.html

# pg_parameter_acl

The catalog `pg_parameter_acl` records configuration parameters for which privileges have been granted to one or more roles. No entry is made for parameters that have default privileges.

Unlike most system catalogs, `pg_parameter_acl` is shared across all databases of a cluster: there is only one copy of `pg_parameter_acl` per cluster, not one per database.

**pg_parameter_acl Columns**

`oid` `oid`

Row identifier

---

`parname` `text`

The name of a configuration parameter for which privileges are granted

---

`paracl` `aclitem[]`

Access privileges; see [Privileges](./ddl-priv.md) for details
