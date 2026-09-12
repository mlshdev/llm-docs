> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/track_input_map_atom](https://developer.apple.com/documentation/quicktime-file-format/track_input_map_atom)

# Track input map atom ('imap')

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that defines how data being sent to this track from its nonprimary sources is to be interpreted.

<a id="Overview"></a>

## Overview

This atom contains one or more track input atoms. Note that the track input map atom is a QT atom structure.

The layout of a track input map atom is as follows:

| Track input map atom | Bytes |
| --- | --- |
| [Size](track_input_map_atom/size.md) | 4 |
| [Type](track_input_map_atom/type.md) = `'imap'` | 4 |
| [Track input atoms](track_input_map_atom/track_input_atoms.md) | Variable |

## Topics

### Data fields

- [Size](track_input_map_atom/size.md): A 32-bit integer that specifies the number of bytes in this track input map atom.
- [Type](track_input_map_atom/type.md): A 32-bit integer that identifies the atom type.
- [Track input atoms](track_input_map_atom/track_input_atoms.md): A list of track input atoms specifying how to use the input data.

## See Also

### Atoms for track input

- [Track input atom](track_input_atom.md): An atom that specifies how to use the input data.
- [Input type atom](input_type_atom.md): An atom that specifies how to interpret track input data.
- [Object ID atom](object_id_atom.md): An atom that identifies an object, such as a sprite within a sprite track, in a track input atom.
