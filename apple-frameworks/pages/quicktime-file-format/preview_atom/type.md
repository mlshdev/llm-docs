> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/preview_atom/type](https://developer.apple.com/documentation/quicktime-file-format/preview_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

<a id="Overview"></a>

## Overview

This field must be set to `'pnot'`.

## See Also

### Atom fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this preview atom.
- [Modification date](modification_date.md): A 32-bit unsigned integer containing a date that indicates when the preview was last updated.
- [Version number](version_number.md): A 16-bit integer
- [Atom type](atom_type.md): A 32-bit integer that indicates the type of atom that contains the preview data.
- [Atom index](atom_index.md): A 16-bit integer that identifies which atom of the specified type is to be used as the preview.
