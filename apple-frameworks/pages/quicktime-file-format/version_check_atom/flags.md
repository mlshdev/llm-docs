> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/version_check_atom/flags](https://developer.apple.com/documentation/quicktime-file-format/version_check_atom/flags)

# Flags

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit integer.

<a id="Overview"></a>

## Overview

Always 0.

## See Also

### Data fields

- [Size](size.md): The number of bytes in this version check atom.
- [Type](type.md): The type of this atom.
- [Software package](software_package.md): A 32-bit Gestalt type specifying the software package to check for.
- [Version](version.md): An unsigned 32-bit integer containing either the minimum required version or the required value after a binary `AND` operation.
- [Mask](mask.md): The mask for a binary `AND` operation on the Gestalt bitfield.
- [Check type](check_type.md): The type of check to perform, expressed as 16-bit integer.
