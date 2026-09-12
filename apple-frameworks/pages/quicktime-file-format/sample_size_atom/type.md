> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/sample_size_atom/type](https://developer.apple.com/documentation/quicktime-file-format/sample_size_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

<a id="Overview"></a>

## Overview

This field must be set to `'stsz'`.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this sample size atom.
- [Version](version.md): A 1-byte specification of the version of this sample size atom.
- [Flags](flags.md): A 3-byte space for sample size flags.
- [Sample size](sample_size.md): A 32-bit integer specifying the sample size.
- [Number of entries](number_of_entries.md): A 32-bit integer containing the count of entries in the sample size table.
- [Sample size table](sample_size_table.md): A table containing the sample size information.
