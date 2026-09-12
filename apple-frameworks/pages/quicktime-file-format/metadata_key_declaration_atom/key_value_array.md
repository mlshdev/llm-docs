> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/metadata_key_declaration_atom/key_value_array](https://developer.apple.com/documentation/quicktime-file-format/metadata_key_declaration_atom/key_value_array)

# Key_value array

**Framework:** QuickTime File Format  
**Kind:** Data field

An array of unsigned 8-bit bytes holding the key’s value.

<a id="Overview"></a>

## Overview

The interpretation of this array is defined by the associated `key_namespace` field. See the [QuickTime metadata keys](../quicktime_metadata_keys.md) table for examples.

## See Also

### Data fields

- [Size](size.md): A 32-bit unsigned integer that indicates the size in bytes of the atom structure.
- [Type](type.md): A 32-bit unsigned integer value.
- [Key_namespace](key_namespace.md): A 32-bit identifier describing the domain and the structure of the key value.
