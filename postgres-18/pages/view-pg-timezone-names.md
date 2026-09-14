> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-timezone-names](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-timezone-names)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-timezone-names.html

# pg_timezone_names

The view `pg_timezone_names` provides a list of time zone names that are recognized by `SET TIMEZONE`, along with their associated abbreviations, UTC offsets, and daylight-savings status. (Technically, PostgreSQL does not use UTC because leap seconds are not handled.) Unlike the abbreviations shown in [`pg_timezone_abbrevs`](./view-pg-timezone-abbrevs.md), many of these names imply a set of daylight-savings transition date rules. Therefore, the associated information changes across local DST boundaries. The displayed information is computed based on the current value of `CURRENT_TIMESTAMP`.

**pg_timezone_names Columns**

`name` `text`

Time zone name

---

`abbrev` `text`

Time zone abbreviation

---

`utc_offset` `interval`

Offset from UTC (positive means east of Greenwich)

---

`is_dst` `bool`

True if currently observing daylight savings
