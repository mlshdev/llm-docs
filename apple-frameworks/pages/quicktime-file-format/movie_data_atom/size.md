> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/movie_data_atom/size](https://developer.apple.com/documentation/quicktime-file-format/movie_data_atom/size)

# Size

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that specifies the number of bytes in this media data atom.

<a id="Overview"></a>

## Overview

If the atom exceeds 2^32 byte, set the size field to `1`.

## See Also

### Data fields

- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Extended size](extended_size.md): A 64-bit integer that specifies the number of bytes in this media data atom.
- [Movie media data](movie_media_data.md): The movie’s media data.
