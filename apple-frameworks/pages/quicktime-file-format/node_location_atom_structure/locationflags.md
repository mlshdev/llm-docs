> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/node_location_atom_structure/locationflags](https://developer.apple.com/documentation/quicktime-file-format/node_location_atom_structure/locationflags)

# locationFlags

**Framework:** QuickTime File Format  
**Kind:** Data field

The location flags.

<a id="Overview"></a>

## Overview

This field must contain the value `kQTVRSameFile`, indicating that the node is to be found in the current file. In the future, these flags may indicate that the node is in a different file or at some URL location.

## See Also

### Data fields

- [majorVersion](majorversion.md): The major version number of the file format.
- [minorVersion](minorversion.md): The minor version number of the file format.
- [nodeType](nodetype.md): The node type.
- [locationData](locationdata.md): The location of the node data.
- [reserved1](reserved1.md): Reserved.
- [reserved2](reserved2.md): Reserved.
