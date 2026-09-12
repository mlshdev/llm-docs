> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/composition_offset_atom/type](https://developer.apple.com/documentation/quicktime-file-format/composition_offset_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

<a id="Overview"></a>

## Overview

This field must be set to `‘ctts’`.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in the composition offset atom.
- [Version](version.md): A 1-byte specification of the version of this atom.
- [Flags](flags.md): A 3-byte space reserved for offset flags.
- [Entry count](entry_count.md): A 32-bit unsigned integer that specifies the number of sample numbers in the array that follows.
