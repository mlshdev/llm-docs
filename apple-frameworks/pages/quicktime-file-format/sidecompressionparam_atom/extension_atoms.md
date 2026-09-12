> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/sidecompressionparam_atom/extension_atoms](https://developer.apple.com/documentation/quicktime-file-format/sidecompressionparam_atom/extension_atoms)

# Extension atoms

**Framework:** QuickTime File Format  
**Kind:** Data field

Atoms containing the necessary out-of-band decompression parameters for the sound decompressor.

<a id="Overview"></a>

## Overview

For MPEG-4 audio (`'mp4a'`), this includes elementary stream descriptor (`'esds'`), format (`'frma'`), and terminator atoms.

## See Also

### Data fields

- [Size](size.md): An unsigned 32-bit integer holding the size of the decompression parameters atom.
- [Type](type.md): An unsigned 32-bit field.
