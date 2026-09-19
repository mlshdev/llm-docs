> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicktime-file-format/color_table_atom/color_array

# Color array

**Framework:** QuickTime File Format  
**Kind:** Data field

An array of colors.

<a id="Overview"></a>

## Overview

Each color is made of four unsigned 16-bit integers. The first integer must be set to `0`, the second is the red value, the third is the green value, and the fourth is the blue value.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this color table atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Color table seed](color_table_seed.md): A 32-bit integer.
- [Color table flags](color_table_flags.md): A 16-bit integer.
- [Color table size](color_table_size.md): A 16-bit integer that indicates the number of colors in the following color array.
