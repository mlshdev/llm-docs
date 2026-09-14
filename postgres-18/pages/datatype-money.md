> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/datatype.sgml#datatype-money](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/datatype.sgml%23datatype-money)
> Canonical documentation: https://www.postgresql.org/docs/18/datatype-money.html

# Monetary Types

The `money` type stores a currency amount with a fixed fractional precision; see [Monetary Types](./datatype-money.md#monetary-types). The fractional precision is determined by the database's [Client Connection Defaults](./runtime-config-client.md#guc-lc-monetary) setting. The range shown in the table assumes there are two fractional digits. Input is accepted in a variety of formats, including integer and floating-point literals, as well as typical currency formatting, such as `'$1,000.00'`. Output is generally in the latter form but depends on the locale.

**Monetary Types**

| Name | Storage Size | Description | Range |
| --- | --- | --- | --- |
| `money` | 8 bytes | currency amount | -92233720368547758.08 to +92233720368547758.07 |

Since the output of this data type is locale-sensitive, it might not work to load `money` data into a database that has a different setting of `lc_monetary`. To avoid problems, before restoring a dump into a new database make sure `lc_monetary` has the same or equivalent value as in the database that was dumped.

Values of the `numeric`, `int`, and `bigint` data types can be cast to `money`. Conversion from the `real` and `double precision` data types can be done by casting to `numeric` first, for example:

```sql
SELECT '12.34'::float8::numeric::money;
```

However, this is not recommended. Floating point numbers should not be used to handle money due to the potential for rounding errors.

A `money` value can be cast to `numeric` without loss of precision. Conversion to other types could potentially lose precision, and must also be done in two stages:

```sql
SELECT '52093.89'::money::numeric::float8;
```

Division of a `money` value by an integer value is performed with truncation of the fractional part towards zero. To get a rounded result, divide by a floating-point value, or cast the `money` value to `numeric` before dividing and back to `money` afterwards. (The latter is preferable to avoid risking precision loss.) When a `money` value is divided by another `money` value, the result is `double precision` (i.e., a pure number, not money); the currency units cancel each other out in the division.
