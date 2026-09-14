> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/basic-archive.sgml#basic-archive](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/basic-archive.sgml%23basic-archive)
> Canonical documentation: https://www.postgresql.org/docs/18/basic-archive.html

# basic_archive — an example WAL archive module

`basic_archive` is an example of an archive module. This module copies completed WAL segment files to the specified directory. This may not be especially useful, but it can serve as a starting point for developing your own archive module. For more information about archive modules, see [Archive Modules](./archive-modules.md).

In order to function, this module must be loaded via [Write Ahead Log](./runtime-config-wal.md#guc-archive-library), and [Write Ahead Log](./runtime-config-wal.md#guc-archive-mode) must be enabled.

## Configuration Parameters

**`basic_archive.archive_directory` (`string`)**

  The directory where the server should copy WAL segment files. This directory must already exist. The default is an empty string, which effectively halts WAL archiving, but if [Write Ahead Log](./runtime-config-wal.md#guc-archive-mode) is enabled, the server will accumulate WAL segment files in the expectation that a value will soon be provided.

These parameters must be set in `postgresql.conf`. Typical usage might be:

```sql
# postgresql.conf
archive_mode = 'on'
archive_library = 'basic_archive'
basic_archive.archive_directory = '/path/to/archive/directory'
```

## Notes

Server crashes may leave temporary files with the prefix `archtemp` in the archive directory. It is recommended to delete such files before restarting the server after a crash. It is safe to remove such files while the server is running as long as they are unrelated to any archiving still in progress, but users should use extra caution when doing so.

## Author

Nathan Bossart
