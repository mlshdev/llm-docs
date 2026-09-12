> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/imaging_parent_atom](https://developer.apple.com/documentation/quicktime-file-format/imaging_parent_atom)

# Imaging parent atom

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that is the parent atom of one or more node-specific imaging atoms.

> VR Media is deprecated in the QuickTime file format. The information that follows documents existing content containing VR Media and should not be used for new development.

<a id="Overview"></a>

## Overview

The imaging parent atom is the parent atom of one or more node-specific imaging atoms. Its atom type is `kQTVRImagingParentAtomType` (`'imgp'`). Only panoramas have an imaging atom defined.

## See Also

### Describing VR worlds

- [QTVR string atom](qtvr_string_atom.md): Deprecated. An atom that contains a string for QuickTime VR.
- [VR world atom container](vr_world_atom_container.md): Deprecated. An atom that contains name for the entire scene, the default node ID, and default imaging properties, as well as a list of the nodes contained in the QTVR track.
- [VR world header atom](vr_world_header_atom.md): Deprecated. An atom contains the name of the scene and the default node ID to be used when the file is first opened.
- [Panorama imaging atom](panorama_imaging_atom.md): Deprecated. An atom describes the default imaging characteristics for all the panoramic nodes in a scene.
