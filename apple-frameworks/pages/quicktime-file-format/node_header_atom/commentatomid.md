> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/node_header_atom/commentatomid](https://developer.apple.com/documentation/quicktime-file-format/node_header_atom/commentatomid)

# commentAtomID

**Framework:** QuickTime File Format  
**Kind:** Data field

The ID of the string atom that contains a comment for the node.

<a id="Overview"></a>

## Overview

This atom should be a sibling of the node header atom. The value of this field is `0` if no comment string atom exists.

## See Also

### Data fields

- [majorVersion](majorversion.md): The major version number of the file format.
- [minorVersion](minorversion.md): The minor version number of the file format.
- [nodeType](nodetype.md): The node type.
- [nodeID](nodeid.md): The node ID.
- [nameAtomID](nameatomid.md): The ID of the string atom that contains the name of the node.
- [reserved1](reserved1.md): Reserved.
- [reserved2](reserved2.md): Reserved.
