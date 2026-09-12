> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/specific_information_atom](https://developer.apple.com/documentation/quicktime-file-format/specific_information_atom)

# Specific information atom

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that identified the hot spot type.

> VR Media is deprecated in the QuickTime file format. The information that follows documents existing content containing VR Media and should not be used for new development.

<a id="Overview"></a>

## Overview

Depending on the value of the `hotSpotType` field in the hot spot info atom there may also be a type specific information atom. The atom type of the type-specific atom is the hot spot type.

## See Also

### Specifying node information

- [Node header atom](node_header_atom.md): Deprecated. An atom that describes the type and ID of a node, as well as other information about the node.
- [Hot spot parent atom](hot_spot_parent_atom.md): Deprecated. An atom that is the parent for all hot spot atoms for the node.
- [Hot spot information atom](hot_spot_information_atom.md): Deprecated. An atom that contains general information about a hot spot.
- [Link hot spot atom](link_hot_spot_atom.md): Deprecated. An atom that specifies information for a link hot spot.
