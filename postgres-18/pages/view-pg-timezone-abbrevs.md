> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-timezone-abbrevs](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-timezone-abbrevs)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-timezone-abbrevs.html

# pg_timezone_abbrevs

The view `pg_timezone_abbrevs` provides a list of time zone abbreviations that are currently recognized by the datetime input routines. The contents of this view change when the [Client Connection Defaults](./runtime-config-client.md#guc-timezone) or [Client Connection Defaults](./runtime-config-client.md#guc-timezone-abbreviations) run-time parameters are modified.

**pg_timezone_abbrevs Columns**

`abbrev` `text`

Time zone abbreviation

---

`utc_offset` `interval`

Offset from UTC (positive means east of Greenwich)

---

`is_dst` `bool`

True if this is a daylight-savings abbreviation

While most timezone abbreviations represent fixed offsets from UTC, there are some that have historically varied in value (see [Date/Time Configuration Files](./datetime-config-files.md) for more information). In such cases this view presents their current meaning.
