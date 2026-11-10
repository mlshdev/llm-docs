> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/appendix-obsolete-default-roles.sgml#default-roles](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/appendix-obsolete-default-roles.sgml%23default-roles)
> Canonical documentation: https://www.postgresql.org/docs/18/default-roles.html

# Default Roles Renamed to Predefined Roles

PostgreSQL 13 and below used the term “Default Roles”. However, as these roles are not able to actually be changed and are installed as part of the system at initialization time, the more appropriate term to use is “Predefined Roles”. See [Predefined Roles](./predefined-roles.md) for current documentation regarding Predefined Roles, and [the release notes for PostgreSQL 14](./release-prior.md) for details on this change.
