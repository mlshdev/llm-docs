> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/edit_list_atom/flags](https://developer.apple.com/documentation/quicktime-file-format/edit_list_atom/flags)

# Flags

**Framework:** QuickTime File Format  
**Kind:** Data field

Three bytes of space for flags.

## Mentioned In

- [Representing encoder delay explicitly](../example_representing_encoder_delay_explicitly.md)

<a id="Overview"></a>

## Overview

Set this field to `0`.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this edit list atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Version](version.md): A 1-byte specification of the version of this edit list atom.
- [Number of entries](number_of_entries.md): A 32-bit integer that specifies the number of entries in the edit list atom.
- [Edit list table](edit_list_table.md): An array of 32-bit values, grouped into entries containing 3 values each.
