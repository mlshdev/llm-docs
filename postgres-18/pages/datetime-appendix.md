> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/datetime.sgml#datetime-appendix](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/datetime.sgml%23datetime-appendix)
> Canonical documentation: https://www.postgresql.org/docs/18/datetime-appendix.html

# Date/Time Support

PostgreSQL uses an internal heuristic parser for all date/time input support. Dates and times are input as strings, and are broken up into distinct fields with a preliminary determination of what kind of information can be in the field. Each field is interpreted and either assigned a numeric value, ignored, or rejected. The parser contains internal lookup tables for all textual fields, including months, days of the week, and time zones.

This appendix includes information on the content of these lookup tables and describes the steps used by the parser to decode dates and times.
