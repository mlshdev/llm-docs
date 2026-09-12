> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/metadata_handler_atom/name](https://developer.apple.com/documentation/quicktime-file-format/metadata_handler_atom/name)

# Name

**Framework:** QuickTime File Format  
**Kind:** Data field

A string with a human-readable name for a metadata type.

<a id="Overview"></a>

## Overview

The name is a NULL-terminated string in UTF-8 characters which gives a human-readable name for a metadata type, for debugging and inspection purposes.

The string may be empty or a single byte containing `0`.

## See Also

### Data fields

- [Size](size.md): A 32-bit unsigned integer that indicates the size in bytes of the atom structure.
- [Type](type.md): A 32-bit unsigned integer value.
- [Version](version.md): One byte.
- [Flags](flags.md): Three bytes.
- [Predefined](predefined.md): A 32-bit integer.
- [Handler type](handler_type.md): A 32-bit integer that indicates the structure used in the metadata atom.
- [Reserved](reserved.md): An array of 3 const unsigned 32-bit integers.
