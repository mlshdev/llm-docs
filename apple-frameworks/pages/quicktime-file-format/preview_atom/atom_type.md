> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicktime-file-format/preview_atom/atom_type

# Atom type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that indicates the type of atom that contains the preview data.

<a id="Overview"></a>

## Overview

Typically, this is set to `'PICT'` to indicate a QuickDraw picture.

## See Also

### Atom fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this preview atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Modification date](modification_date.md): A 32-bit unsigned integer containing a date that indicates when the preview was last updated.
- [Version number](version_number.md): A 16-bit integer
- [Atom index](atom_index.md): A 16-bit integer that identifies which atom of the specified type is to be used as the preview.
