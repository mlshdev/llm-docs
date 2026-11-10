> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/manage-ag.sgml#manage-ag-dropdb](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/manage-ag.sgml%23manage-ag-dropdb)
> Canonical documentation: https://www.postgresql.org/docs/18/manage-ag-dropdb.html

# Destroying a Database

Databases are destroyed with the command [DROP DATABASE](./sql-dropdatabase.md):

```
DROP DATABASE name;
```

Only the owner of the database, or a superuser, can drop a database. Dropping a database removes all objects that were contained within the database. The destruction of a database cannot be undone.

You cannot execute the `DROP DATABASE` command while connected to the victim database. You can, however, be connected to any other database, including the `template1` database. `template1` would be the only option for dropping the last user database of a given cluster.

For convenience, there is also a shell program to drop databases, [dropdb](./app-dropdb.md):

```
dropdb dbname
```

(Unlike `createdb`, it is not the default action to drop the database with the current user name.)
