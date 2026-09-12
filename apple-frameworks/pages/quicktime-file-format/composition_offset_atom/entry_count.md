> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/composition_offset_atom/entry_count](https://developer.apple.com/documentation/quicktime-file-format/composition_offset_atom/entry_count)

# Entry count

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit unsigned integer that specifies the number of sample numbers in the array that follows.

<a id="Overview"></a>

## Overview

Following the entry count is a composition-offset table. The layout of the composition-offset table is as follows.

| Field | Bytes |
| --- | --- |
| sampleCount | 4 |
| compositionOffset | 4 |

- **sampleCount**: A 32-bit unsigned integer that provides the number of consecutive samples with the calculated composition offset in the field.
- **compositionOffset**: A 32-bit signed integer indicating the value of the calculated compositionOffset.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in the composition offset atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Version](version.md): A 1-byte specification of the version of this atom.
- [Flags](flags.md): A 3-byte space reserved for offset flags.
