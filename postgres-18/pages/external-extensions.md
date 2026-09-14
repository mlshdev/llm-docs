> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/external-projects.sgml#external-extensions](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/external-projects.sgml%23external-extensions)
> Canonical documentation: https://www.postgresql.org/docs/18/external-extensions.html

# Extensions

PostgreSQL is designed to be easily extensible. For this reason, extensions loaded into the database can function just like features that are built in. The `contrib/` directory shipped with the source code contains several extensions, which are described in [Additional Supplied Modules and Extensions](./contrib.md). Other extensions are developed independently, like `[PostGIS](https://postgis.net/)`. Even PostgreSQL replication solutions can be developed externally. For example, `[Slony-I](https://www.slony.info)` is a popular primary/standby replication solution that is developed independently from the core project.
