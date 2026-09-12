> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/node_location_atom_structure/locationdata](https://developer.apple.com/documentation/quicktime-file-format/node_location_atom_structure/locationdata)

# locationData

**Framework:** QuickTime File Format  
**Kind:** Data field

The location of the node data.

<a id="Overview"></a>

## Overview

When the `locationFlags` field is `kQTVRSameFile`, this field should be `0`. The nodes are found in the file in the same order that they are found in the node list.

## See Also

### Data fields

- [majorVersion](majorversion.md): The major version number of the file format.
- [minorVersion](minorversion.md): The minor version number of the file format.
- [nodeType](nodetype.md): The node type.
- [locationFlags](locationflags.md): The location flags.
- [reserved1](reserved1.md): Reserved.
- [reserved2](reserved2.md): Reserved.
