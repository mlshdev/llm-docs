> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicktime-file-format/sample_description_atom/type

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

<a id="Overview"></a>

## Overview

This field must be set to `'stsd'`.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this sample description atom.
- [Version](version.md): A 1-byte specification of the version of this sample description atom.
- [Flags](flags.md): A 3-byte space for sample description flags.
- [Number of entries](number_of_entries.md): A 32-bit integer containing the number of sample descriptions that follow.
- [Sample description table](sample_description_table.md): An array of sample descriptions.
