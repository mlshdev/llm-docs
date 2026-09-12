> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/compressed_matte_atom/matte_image_description_structure](https://developer.apple.com/documentation/quicktime-file-format/compressed_matte_atom/matte_image_description_structure)

# Matte image description structure

**Framework:** QuickTime File Format  
**Kind:** Data field

An image description structure associated with this matte data.

<a id="Overview"></a>

## Overview

The image description contains detailed information that governs how the matte data is used. See [Video sample description](../video_sample_description.md) for more information about image descriptions.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this compressed matte atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Version](version.md): A 1-byte specification of the version of this compressed matte atom.
- [Flags](flags.md): Three bytes of space for flags.
- [Matte data](matte_data.md): The compressed matte data, which is of variable length.
