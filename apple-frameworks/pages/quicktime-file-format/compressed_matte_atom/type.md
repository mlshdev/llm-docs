> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/compressed_matte_atom/type](https://developer.apple.com/documentation/quicktime-file-format/compressed_matte_atom/type)

# Type

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer that identifies the atom type.

<a id="Overview"></a>

## Overview

This field must be set to `'kmat'`.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this compressed matte atom.
- [Version](version.md): A 1-byte specification of the version of this compressed matte atom.
- [Flags](flags.md): Three bytes of space for flags.
- [Matte image description structure](matte_image_description_structure.md): An image description structure associated with this matte data.
- [Matte data](matte_data.md): The compressed matte data, which is of variable length.
