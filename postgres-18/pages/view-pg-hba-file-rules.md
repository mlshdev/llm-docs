> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-hba-file-rules](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-hba-file-rules)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-hba-file-rules.html

# pg_hba_file_rules

The view `pg_hba_file_rules` provides a summary of the contents of the client authentication configuration file, [`pg_hba.conf`](./auth-pg-hba-conf.md). A row appears in this view for each non-empty, non-comment line in the file, with annotations indicating whether the rule could be applied successfully.

This view can be helpful for checking whether planned changes in the authentication configuration file will work, or for diagnosing a previous failure. Note that this view reports on the *current* contents of the file, not on what was last loaded by the server.

By default, the `pg_hba_file_rules` view can be read only by superusers.

**pg_hba_file_rules Columns**

`rule_number` `int4`

Number of this rule, if valid, otherwise `NULL`. This indicates the order in which each rule is considered until a match is found during authentication.

---

`file_name` `text`

Name of the file containing this rule

---

`line_number` `int4`

Line number of this rule in `file_name`

---

`type` `text`

Type of connection

---

`database` `text[]`

List of database name(s) to which this rule applies

---

`user_name` `text[]`

List of user and group name(s) to which this rule applies

---

`address` `text`

Host name or IP address, or one of `all`, `samehost`, or `samenet`, or null for local connections

---

`netmask` `text`

IP address mask, or null if not applicable

---

`auth_method` `text`

Authentication method

---

`options` `text[]`

Options specified for authentication method, if any

---

`error` `text`

If not null, an error message indicating why this line could not be processed

Usually, a row reflecting an incorrect entry will have values for only the `line_number` and `error` fields.

See [Client Authentication](./client-authentication.md) for more information about client authentication configuration.
