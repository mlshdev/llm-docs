> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/timecode_sample_description/reserved](https://developer.apple.com/documentation/quicktime-file-format/timecode_sample_description/reserved)

# Reserved

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that is reserved for future use.

<a id="Overview"></a>

## Overview

Set this field to `0`.

## See Also

### Data fields

- [Flags](flags.md): A 32-bit integer containing flags that identify some timecode characteristics.
- [Time scale](time_scale.md): A 32-bit integer that specifies the time scale for interpreting the frame duration field.
- [Frame duration](frame_duration.md): A 32-bit integer that indicates how long each frame lasts in real time.
- [Number of frames](number_of_frames.md): An 8-bit integer that contains the number of frames per second for the timecode format.
- [Reserved](reserved2.md): An 8-bit quantity.
- [Source reference](source_reference.md): A user data atom containing information about the source tape.
