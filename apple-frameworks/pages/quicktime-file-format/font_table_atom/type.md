> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/font_table_atom/type](https://developer.apple.com/documentation/quicktime-file-format/font_table_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

An unsigned 32-bit field.

<a id="Overview"></a>

## Overview

Contains the four-character code `'ftab'`.

## See Also

### Data fields

- [Size](size.md): An unsigned 32-bit integer holding the size of the font table atom.
- [Count](count.md): An unsigned 16-bit integer specifying how many fonts are described in this table.
- [Font identifier](font_identifier.md): An unsigned 16-bit integer that identifies the font.
- [Font name length](font_name_length.md): An unsigned 8-bit integer specifying the length of the font name in bytes.
- [Font name](font_name.md): Must be either “Serif” or “Sans-Serif”.
