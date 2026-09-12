> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/input_type_atom](https://developer.apple.com/documentation/quicktime-file-format/input_type_atom)

# Input type atom ('  ty')

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that specifies how to interpret track input data.

<a id="Overview"></a>

## Overview

The input type atom is required; it specifies how the data is to be interpreted.

## Topics

### Data fields

- [Size](input_type_atom/size.md): A 32-bit integer that specifies the number of bytes in this input type atom.
- [Type](input_type_atom/type.md): A 32-bit integer that identifies the atom type.
- [Input type](input_type_atom/input_type.md): A 32-bit integer that specifies the type of data that is to be received from the secondary data source.

## See Also

### Atoms for track input

- [Track input map atom](track_input_map_atom.md): An atom that defines how data being sent to this track from its nonprimary sources is to be interpreted.
- [Track input atom](track_input_atom.md): An atom that specifies how to use the input data.
- [Object ID atom](object_id_atom.md): An atom that identifies an object, such as a sprite within a sprite track, in a track input atom.
