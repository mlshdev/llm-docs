> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/sample-to-group_atom/type](https://developer.apple.com/documentation/quicktime-file-format/sample-to-group_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

## Mentioned In

- [Representing encoder delay explicitly](../example_representing_encoder_delay_explicitly.md)

<a id="Overview"></a>

## Overview

Set to `'sbgp'`.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this sample-to-group atom.
- [Version](version.md): A 1-byte specification of the version of this sample-to-group atom.
- [Flags](flags.md): A 3-byte reserved space.
- [Grouping type](grouping_type.md): A 32-bit integer identifying the grouping type.
- [Default length](default_length.md): A 32-bit integer indicating the length of the group entry in the payload data.
- [Entry count](entry_count.md): A 32-bit integer giving the number of entries in the table data that follows.
- [Table data](table_data.md): A table of sample count and group description index pairs.
