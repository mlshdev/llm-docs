> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/metadata_header_atom/nextitemid](https://developer.apple.com/documentation/quicktime-file-format/metadata_header_atom/nextitemid)

# nextItemID

**Framework:** QuickTime File Format  
**Kind:** Data field

A 32-bit unsigned integer indicating the value to use for the item ID of the next item created or assigned an item ID.

<a id="Overview"></a>

## Overview

If the value is all ones, it indicates that future additions will require a search for an unused item ID.

## See Also

### Data fields

- [Size](size.md): A 32-bit unsigned integer that indicates the size in bytes of the atom structure.
- [Type](type.md): A 32-bit unsigned integer value.
- [Version](version.md): One byte.
- [Flags](flags.md): Three bytes.
