> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/track_reference_type_atom/track_ids](https://developer.apple.com/documentation/quicktime-file-format/track_reference_type_atom/track_ids)

# Track IDs

**Framework:** QuickTime File Format  
**Kind:** Data field

A list of track ID values (32-bit integers) specifying the related tracks.

<a id="Overview"></a>

## Overview

Note that this is one case where track ID values can be set to `0`. Unused entries in the atom may have a track ID value of `0`. Setting the track ID to `0` may be more convenient than deleting the reference.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this track reference type atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
