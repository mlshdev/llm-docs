> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/catalogs.sgml#catalog-pg-auth-members](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/catalogs.sgml%23catalog-pg-auth-members)
> Canonical documentation: https://www.postgresql.org/docs/18/catalog-pg-auth-members.html

# pg_auth_members

The catalog `pg_auth_members` shows the membership relations between roles. Any non-circular set of relationships is allowed.

Because user identities are cluster-wide, `pg_auth_members` is shared across all databases of a cluster: there is only one copy of `pg_auth_members` per cluster, not one per database.

**pg_auth_members Columns**

`oid` `oid`

Row identifier

---

`roleid` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

ID of a role that has a member

---

`member` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

ID of a role that is a member of `roleid`

---

`grantor` `oid` (references [`pg_authid`](./catalog-pg-authid.md).`oid`)

ID of the role that granted this membership

---

`admin_option` `bool`

True if `member` can grant membership in `roleid` to others

---

`inherit_option` `bool`

True if the member automatically inherits the privileges of the granted role

---

`set_option` `bool`

True if the member can [`SET ROLE`](./sql-set-role.md) to the granted role
