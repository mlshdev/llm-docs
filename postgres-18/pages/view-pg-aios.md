> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/system-views.sgml#view-pg-aios](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/system-views.sgml%23view-pg-aios)
> Canonical documentation: https://www.postgresql.org/docs/18/view-pg-aios.html

# pg_aios

The `pg_aios` view lists all [Glossary](./glossary.md#glossary-aio) handles that are currently in-use. An I/O handle is used to reference an I/O operation that is being prepared, executed or is in the process of completing. `pg_aios` contains one row for each I/O handle.

This view is mainly useful for developers of PostgreSQL, but may also be useful when tuning PostgreSQL.

**pg_aios Columns**

`pid` `int4`

Process ID of the server process that is issuing this I/O.

---

`io_id` `int4`

Identifier of the I/O handle. Handles are reused once the I/O completed (or if the handle is released before I/O is started). On reuse [`pg_aios`.`io_generation`](./view-pg-aios.md#view-pg-aios-io-generation) is incremented.

---

`io_generation` `int8`

Generation of the I/O handle.

---

`state` `text`

State of the I/O handle:

- `HANDED_OUT`, referenced by code but not yet used
- `DEFINED`, information necessary for execution is known
- `STAGED`, ready for execution
- `SUBMITTED`, submitted for execution
- `COMPLETED_IO`, finished, but result has not yet been processed
- `COMPLETED_SHARED`, shared completion processing completed
- `COMPLETED_LOCAL`, backend local completion processing completed

---

`operation` `text`

Operation performed using the I/O handle:

- `invalid`, not yet known
- `readv`, a vectored read
- `writev`, a vectored write

---

`off` `int8`

Offset of the I/O operation.

---

`length` `int8`

Length of the I/O operation.

---

`target` `text`

What kind of object is the I/O targeting:

- `smgr`, I/O on relations

---

`handle_data_len` `int2`

Length of the data associated with the I/O operation. For I/O to/from [Resource Consumption](./runtime-config-resource.md#guc-shared-buffers) and [Resource Consumption](./runtime-config-resource.md#guc-temp-buffers), this indicates the number of buffers the I/O is operating on.

---

`raw_result` `int4`

Low-level result of the I/O operation, or NULL if the operation has not yet completed.

---

`result` `text`

High-level result of the I/O operation:

- `UNKNOWN` means that the result of the operation is not yet known.
- `OK` means the I/O completed successfully.
- `PARTIAL` means that the I/O completed without error, but did not process all data. Commonly callers will need to retry and perform the remainder of the work in a separate I/O.
- `WARNING` means that the I/O completed without error, but that execution of the IO triggered a warning. E.g. when encountering a corrupted buffer with [Developer Options](./runtime-config-developer.md#guc-zero-damaged-pages) enabled.
- `ERROR` means the I/O failed with an error.

---

`target_desc` `text`

Description of what the I/O operation is targeting.

---

`f_sync` `bool`

Flag indicating whether the I/O is executed synchronously.

---

`f_localmem` `bool`

Flag indicating whether the I/O references process local memory.

---

`f_buffered` `bool`

Flag indicating whether the I/O is buffered I/O.

The `pg_aios` view is read-only.

By default, the `pg_aios` view can be read only by superusers or roles with privileges of the `pg_read_all_stats` role.
