> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/external-projects.sgml#external-interfaces](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/external-projects.sgml%23external-interfaces)
> Canonical documentation: https://www.postgresql.org/docs/18/external-interfaces.html

# Client Interfaces

There are only two client interfaces included in the base PostgreSQL distribution:

- [libpq](./libpq.md) is included because it is the primary C language interface, and because many other client interfaces are built on top of it.
- [ECPG](./ecpg.md) is included because it depends on the server-side SQL grammar, and is therefore sensitive to changes in PostgreSQL itself.

All other language interfaces are external projects and are distributed separately. A [list of language interfaces](https://wiki.postgresql.org/wiki/List_of_drivers) is maintained on the PostgreSQL wiki. Note that some of these packages are not released under the same license as PostgreSQL. For more information on each language interface, including licensing terms, refer to its website and documentation.

https://wiki.postgresql.org/wiki/List_of_drivers
