> Pinned source for PostgreSQL 18 REL_18_7: [doc/src/sgml/archive-modules.sgml#archive-module-init](https://github.com/postgres/postgres/blob/f5c41f6681c910b3f69951bf6fb97c6d74605d25/doc/src/sgml/archive-modules.sgml%23archive-module-init)
> Canonical documentation: https://www.postgresql.org/docs/18/archive-module-init.html

# Initialization Functions

An archive library is loaded by dynamically loading a shared library with the [Write Ahead Log](./runtime-config-wal.md#guc-archive-library)'s name as the library base name. The normal library search path is used to locate the library. To provide the required archive module callbacks and to indicate that the library is actually an archive module, it needs to provide a function named `_PG_archive_module_init`. The result of the function must be a pointer to a struct of type `ArchiveModuleCallbacks`, which contains everything that the core code needs to know to make use of the archive module. The return value needs to be of server lifetime, which is typically achieved by defining it as a `static const` variable in global scope.

```sql
typedef struct ArchiveModuleCallbacks
{
    ArchiveStartupCB startup_cb;
    ArchiveCheckConfiguredCB check_configured_cb;
    ArchiveFileCB archive_file_cb;
    ArchiveShutdownCB shutdown_cb;
} ArchiveModuleCallbacks;
typedef const ArchiveModuleCallbacks *(*ArchiveModuleInit) (void);
```

Only the `archive_file_cb` callback is required. The others are optional.
