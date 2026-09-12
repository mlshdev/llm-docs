> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/closed_captioning_sample_data/type](https://developer.apple.com/documentation/quicktime-file-format/closed_captioning_sample_data/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

<a id="Overview"></a>

## Overview

This field must be set to `'cdat'`.

> **Note**

> Apple reserves all atom types with lowercase letters and numbers.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this closed captioning media data atom.
- [Sample data](sample_data.md): An array of one or more byte pairs for data channel 1/field 1 (“CC1”) of a CEA-608 data stream, each byte pair corresponding to a video frame.
