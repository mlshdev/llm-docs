> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/print_to_video_atom/play_on_open](https://developer.apple.com/documentation/quicktime-file-format/print_to_video_atom/play_on_open)

# Play on open

**Framework:** QuickTime File Format  
**Kind:** Data field

An 8-bit Boolean value that indicates whether the movie plays when opened.

<a id="Overview"></a>

## Overview

The value is normally `1`, indicating that the movie plays when opened. Since there is no visible controller in full-screen mode, always set this field to `1` to prevent user confusion.

## See Also

### Data fields

- [Display size](display_size.md): A 16-bit little-endian integer indicating the display size for the movie.
- [Reserved](reserved1.md): A 16-bit integer.
- [Reserved](reserved2.md): A 16-bit integer.
