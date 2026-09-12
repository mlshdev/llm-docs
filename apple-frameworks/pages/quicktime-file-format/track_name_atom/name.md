> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/track_name_atom/name](https://developer.apple.com/documentation/quicktime-file-format/track_name_atom/name)

# Name

**Framework:** QuickTime File Format  
**Kind:** Data field

A string holding the track name.

<a id="Overview"></a>

## Overview

A `NULL`-terminated UTF-8 or UTF-16 string holding the track name. If this is a UTF-16 string, the string must start with a byte-order mark (`0xFEFF`).

## See Also

### Data fields

- [Reserved](reserved.md): A 32-bit integer.
- [Language](language.md): A 16-bit integer holding a packed ISO 639-2/T code.
