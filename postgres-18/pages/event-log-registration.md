> Tag-pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/runtime.sgml#event-log-registration](https://www.postgresql.org/docs/18/event-log-registration.html)

# Registering Event Log on Windows

To register a `Windows` `event log` library with the operating system, issue this command:

```
regsvr32 pgsql_library_directory/pgevent.dll
```

This creates registry entries used by the event viewer, under the default event source named `PostgreSQL`.

To specify a different event source name (see [Error Reporting and Logging](./runtime-config-logging.md#guc-event-source)), use the `/n` and `/i` options:

```
regsvr32 /n /i:event_source_name pgsql_library_directory/pgevent.dll
```

To unregister the `event log` library from the operating system, issue this command:

```
regsvr32 /u [/i:event_source_name] pgsql_library_directory/pgevent.dll
```

> **Note**
>
> To enable event logging in the database server, modify [Error Reporting and Logging](./runtime-config-logging.md#guc-log-destination) to include `eventlog` in `postgresql.conf`.
