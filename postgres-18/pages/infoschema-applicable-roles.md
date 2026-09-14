> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/information_schema.sgml#infoschema-applicable-roles](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/information_schema.sgml%23infoschema-applicable-roles)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-applicable-roles.html

# applicable_roles

The view `applicable_roles` identifies all roles whose privileges the current user can use. This means there is some chain of role grants from the current user to the role in question. The current user itself is also an applicable role. The set of applicable roles is generally used for permission checking.

**applicable_roles Columns**

`grantee` `sql_identifier`

Name of the role to which this role membership was granted (can be the current user, or a different role in case of nested role memberships)

---

`role_name` `sql_identifier`

Name of a role

---

`is_grantable` `yes_or_no`

`YES` if the grantee has the admin option on the role, `NO` if not
