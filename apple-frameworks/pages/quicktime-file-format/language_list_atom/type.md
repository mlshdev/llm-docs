> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/language_list_atom/type](https://developer.apple.com/documentation/quicktime-file-format/language_list_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit unsigned integer value.

<a id="Overview"></a>

## Overview

Set to `'lang'`.

## See Also

### Data fields

- [Size](size.md): A 32-bit unsigned integer that indicates the size in bytes of the atom structure.
- [Version](version.md): One byte.
- [Flags](flags.md): Three bytes.
- [Entry_count](entry_count.md): A 32-bit integer indicating the number of language arrays to follow in this atom.
- [Language_count](language_count.md): A 16-bit integer indicating the number of languages in the array.
- [Language\[Language_count\]](language_language_count.md): An array of 16-bit integers, defined according to the ISO 639-2/T definition of language codes.
