> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/color_table_atom/color_table_size](https://developer.apple.com/documentation/quicktime-file-format/color_table_atom/color_table_size)

# Color table size

**Framework:** QuickTime File Format  
**Kind:** Data field

A 16-bit integer that indicates the number of colors in the following color array.

<a id="Overview"></a>

## Overview

This is a zero-relative value; setting this field to `0` means that there is one color in the array.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this color table atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Color table seed](color_table_seed.md): A 32-bit integer.
- [Color table flags](color_table_flags.md): A 16-bit integer.
- [Color array](color_array.md): An array of colors.
