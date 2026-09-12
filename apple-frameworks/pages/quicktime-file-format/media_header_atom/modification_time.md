> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/media_header_atom/modification_time](https://developer.apple.com/documentation/quicktime-file-format/media_header_atom/modification_time)

# Modification time

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that specifies the last modification date for the media atom.

<a id="Overview"></a>

## Overview

Represent the calendar date and time in seconds since midnight, January 1, 1904, preferably using coordinated universal time (UTC).

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this media header atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Version](version.md): One byte that specifies the version of this header atom.
- [Flags](flags.md): Three bytes of space for media header flags.
- [Creation time](creation_time.md): A 32-bit integer that specifies the creation date for the media atom.
- [Time scale](time_scale.md): A time value that indicates the time scale for this media.
- [Duration](duration.md): The duration of this media in units of its time scale.
- [Language](language.md): A 16-bit integer that specifies the language code for this media.
- [Quality](quality.md): A 16-bit integer that specifies the media’s playback quality.
