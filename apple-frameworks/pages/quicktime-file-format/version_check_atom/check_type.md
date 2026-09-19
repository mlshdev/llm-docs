> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicktime-file-format/version_check_atom/check_type

# Check type

**Framework:** QuickTime File Format  
**Kind:** Data field

The type of check to perform, expressed as 16-bit integer.

<a id="Overview"></a>

## Overview

Set to `0` for a minimum version check, set to `1` for a required value after a binary `AND` of the Gestalt bitfield and the mask.

## See Also

### Data fields

- [Size](size.md): The number of bytes in this version check atom.
- [Type](type.md): The type of this atom.
- [Flags](flags.md): A 32-bit integer.
- [Software package](software_package.md): A 32-bit Gestalt type specifying the software package to check for.
- [Version](version.md): An unsigned 32-bit integer containing either the minimum required version or the required value after a binary `AND` operation.
- [Mask](mask.md): The mask for a binary `AND` operation on the Gestalt bitfield.
