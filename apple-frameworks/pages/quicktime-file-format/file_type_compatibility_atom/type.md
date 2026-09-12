> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/file_type_compatibility_atom/type](https://developer.apple.com/documentation/quicktime-file-format/file_type_compatibility_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit unsigned integer that identifies the atom type, typically represented as a four-character code.

<a id="Overview"></a>

## Overview

This field must be set to `'ftyp'`.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in the atom.
- [Major brand](major_brand.md): A 32-bit unsigned integer that represents a file format code.
- [Minor version](minor_version.md): A 32-bit field that indicates the file format specification version.
- [Compatible brands](compatible_brands.md): A series of unsigned 32-bit integers listing compatible file formats.
