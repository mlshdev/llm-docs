> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/metadata_key_declaration_atom/key_namespace](https://developer.apple.com/documentation/quicktime-file-format/metadata_key_declaration_atom/key_namespace)

# Key_namespace

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit identifier describing the domain and the structure of the key value.

<a id="Overview"></a>

## Overview

For example, this could indicate that `key_value` is a reverse-address style string (such as “com.apple.quicktime.ISO6709”), a binary four-character code (such as a `'cprt'` user data key), a Uniform Resource Identifier (URI), or other structures (such as native formats from other metadata standards). New key namespaces must be registered but because a reverse-address style string can often be used, using the reverse-address key namespace may be sufficient for most uses.

## See Also

### Data fields

- [Size](size.md): A 32-bit unsigned integer that indicates the size in bytes of the atom structure.
- [Type](type.md): A 32-bit unsigned integer value.
- [Key_value array](key_value_array.md): An array of unsigned 8-bit bytes holding the key’s value.
