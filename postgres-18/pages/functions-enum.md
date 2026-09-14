> Pinned source for PostgreSQL 18 REL_18_6: [doc/src/sgml/func.sgml#functions-enum](https://github.com/postgres/postgres/blob/724edf9bde9d356724ad384a2e196edc3c9f80f7/doc/src/sgml/func.sgml%23functions-enum)
> Canonical documentation: https://www.postgresql.org/docs/18/functions-enum.html

# Enum Support Functions

For enum types (described in [Enumerated Types](./datatype-enum.md)), there are several functions that allow cleaner programming without hard-coding particular values of an enum type. These are listed in [Enum Support Functions](./functions-enum.md#enum-support-functions). The examples assume an enum type created as:

```sql
CREATE TYPE rainbow AS ENUM ('red', 'orange', 'yellow', 'green', 'blue', 'purple');
```

**Enum Support Functions**

`enum_first` ( `anyenum` ) → `anyenum`

Returns the first value of the input enum type.

`enum_first(null::rainbow)` → `red`

---

`enum_last` ( `anyenum` ) → `anyenum`

Returns the last value of the input enum type.

`enum_last(null::rainbow)` → `purple`

---

`enum_range` ( `anyenum` ) → `anyarray`

Returns all values of the input enum type in an ordered array.

`enum_range(null::rainbow)` → `{red,orange,yellow,&#x200B;green,blue,purple}`

---

`enum_range` ( `anyenum`, `anyenum` ) → `anyarray`

Returns the range between the two given enum values, as an ordered array. The values must be from the same enum type. If the first parameter is null, the result will start with the first value of the enum type. If the second parameter is null, the result will end with the last value of the enum type.

`enum_range('orange'::rainbow, 'green'::rainbow)` → `{orange,yellow,green}`

`enum_range(NULL, 'green'::rainbow)` → `{red,orange,&#x200B;yellow,green}`

`enum_range('orange'::rainbow, NULL)` → `{orange,yellow,green,&#x200B;blue,purple}`

Notice that except for the two-argument form of `enum_range`, these functions disregard the specific value passed to them; they care only about its declared data type. Either null or a specific value of the type can be passed, with the same result. It is more common to apply these functions to a table column or function argument than to a hardwired type name as used in the examples.
