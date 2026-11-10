> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/catalogs.sgml#catalog-pg-db-role-setting](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/catalogs.sgml%23catalog-pg-db-role-setting)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-db-role-setting.html

# pg_db_role_setting

The catalog `pg_db_role_setting` records the default values that have been set for run-time configuration variables, for each role and database combination.

Unlike most system catalogs, `pg_db_role_setting` is shared across all databases of a cluster: there is only one copy of `pg_db_role_setting` per cluster, not one per database.

**pg_db_role_setting Columns**

`setdatabase` `oid` (references [`pg_database`](./catalog-pg-database.md).`oid`)

The OID of the database the setting is applicable to, or zero if not database-specific

---

`setrole` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

The OID of the role the setting is applicable to, or zero if not role-specific

---

`setconfig` `text[]`

Defaults for run-time configuration variables
