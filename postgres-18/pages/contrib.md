> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/contrib.sgml#contrib](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/contrib.sgml%23contrib)
> Canonical documentation: https://www.postgresql.org/docs/18/contrib.html

# Additional Supplied Modules and Extensions

This appendix and the next one contain information on the optional components found in the `contrib` directory of the PostgreSQL distribution. These include porting tools, analysis utilities, and plug-in features that are not part of the core PostgreSQL system. They are separate mainly because they address a limited audience or are too experimental to be part of the main source tree. This does not preclude their usefulness.

This appendix covers extensions and other server plug-in module libraries found in `contrib`. [Additional Supplied Programs](./contrib-prog.md) covers utility programs.

When building from the source distribution, these optional components are not built automatically, unless you build the "world" target (see [Build](./install-make.md#build)). You can build and install all of them by running:

```
make
make install
```

in the `contrib` directory of a configured source tree; or to build and install just one selected module, do the same in that module's subdirectory. Many of the modules have regression tests, which can be executed by running:

```
make check
```

before installation or

```
make installcheck
```

once you have a PostgreSQL server running.

If you are using a pre-packaged version of PostgreSQL, these components are typically made available as a separate subpackage, such as `postgresql-contrib`.

Many components supply new user-defined functions, operators, or types, packaged as *extensions*. To make use of one of these extensions, after you have installed the code you need to register the new SQL objects in the database system. This is done by executing a [CREATE EXTENSION](./sql-createextension.md) command. In a fresh database, you can simply do

```sql
CREATE EXTENSION extension_name;
```

This command registers the new SQL objects in the current database only, so you need to run it in every database in which you want the extension's facilities to be available. Alternatively, run it in database `template1` so that the extension will be copied into subsequently-created databases by default.

For all extensions, the `CREATE EXTENSION` command must be run by a database superuser, unless the extension is considered “trusted”. Trusted extensions can be run by any user who has `CREATE` privilege on the current database. Extensions that are trusted are identified as such in the sections that follow. Generally, trusted extensions are ones that cannot provide access to outside-the-database functionality.

The following extensions are trusted in a default installation:

- [btree_gin — GIN operator classes with B-tree behavior](./btree-gin.md)
- [btree_gist — GiST operator classes with B-tree behavior](./btree-gist.md)
- [citext — a case-insensitive character string type](./citext.md)
- [cube — a multi-dimensional cube data type](./cube.md)
- [dict_int — example full-text search dictionary for integers](./dict-int.md)
- [fuzzystrmatch — determine string similarities and distance](./fuzzystrmatch.md)
- [hstore — hstore key/value datatype](./hstore.md)
- [intarray — manipulate arrays of integers](./intarray.md)
- [isn — data types for international standard numbers (ISBN, EAN, UPC, etc.)](./isn.md)
- [lo — manage large objects](./lo.md)
- [ltree — hierarchical tree-like data type](./ltree.md)
- [pgcrypto — cryptographic functions](./pgcrypto.md)
- [pg_trgm — support for similarity of text using trigram matching](./pgtrgm.md)
- [seg — a datatype for line segments or floating point intervals](./seg.md)
- [tablefunc — functions that return tables (crosstab and others)](./tablefunc.md)
- [tcn — a trigger function to notify listeners of changes to table content](./tcn.md)
- [tsm_system_rows — the SYSTEM_ROWS sampling method for TABLESAMPLE](./tsm-system-rows.md)
- [tsm_system_time — the SYSTEM_TIME sampling method for TABLESAMPLE](./tsm-system-time.md)
- [unaccent — a text search dictionary which removes diacritics](./unaccent.md)
- [uuid-ossp — a UUID generator](./uuid-ossp.md)

Many extensions allow you to install their objects in a schema of your choice. To do that, add `SCHEMA schema_name` to the `CREATE EXTENSION` command. By default, the objects will be placed in your current creation target schema, which in turn defaults to `public`.

Note, however, that some of these components are not “extensions” in this sense, but are loaded into the server in some other way, for instance by way of [Client Connection Defaults](./runtime-config-client.md#guc-shared-preload-libraries). See the documentation of each component for details.
