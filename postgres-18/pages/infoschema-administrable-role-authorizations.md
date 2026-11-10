> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/information_schema.sgml#infoschema-administrable-role-authorizations](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/information_schema.sgml%23infoschema-administrable-role-authorizations)
> Canonical documentation: https://www.postgresql.org/docs/18/infoschema-administrable-role-authorizations.html

# administrable_role_&#x200B;authorizations

The view `administrable_role_authorizations` identifies all roles that the current user has the admin option for.

**administrable_role_authorizations Columns**

`grantee` `sql_identifier`

Name of the role to which this role membership was granted (can be the current user, or a different role in case of nested role memberships)

---

`role_name` `sql_identifier`

Name of a role

---

`is_grantable` `yes_or_no`

Always `YES`
