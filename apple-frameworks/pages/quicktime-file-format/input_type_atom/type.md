> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicktime-file-format/input_type_atom/type

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

<a id="Overview"></a>

## Overview

This field must be set to `' ty'` (note that the two leading bytes must be set to `0x00`).

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this input type atom.
- [Input type](input_type.md): A 32-bit integer that specifies the type of data that is to be received from the secondary data source.
