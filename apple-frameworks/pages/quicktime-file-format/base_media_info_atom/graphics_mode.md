> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/base_media_info_atom/graphics_mode](https://developer.apple.com/documentation/quicktime-file-format/base_media_info_atom/graphics_mode)

# Graphics mode

**Framework:** QuickTime File Format  
**Kind:** Data field

A 16-bit integer that specifies the transfer mode.

<a id="Overview"></a>

## Overview

The transfer mode specifies which Boolean operation QuickDraw performs when drawing or transferring an image from one location to another. See [Graphics modes](../graphics_modes.md) for more information about graphics modes supported by QuickTime.

## See Also

### Data fields

- [Size](size.md): A 32-bit integer that specifies the number of bytes in this base media info atom.
- [Type](type.md): A 32-bit integer that identifies the atom type.
- [Version](version.md): A 1-byte specification of the version of this base media information header atom.
- [Flags](flags.md): A 3-byte space for base media information flags.
- [Opcolor](opcolor.md): Three 16-bit values that specify the red, green, and blue colors for the transfer mode operation indicated in the graphics mode field.
- [Balance](balance.md): A 16-bit integer that specifies the sound balance of this media.
- [Reserved](reserved.md): Reserved for use by Apple.
