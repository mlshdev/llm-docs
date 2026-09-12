> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/ktweenregiondata](https://developer.apple.com/documentation/quicktime-file-format/ktweenregiondata)

# kTweenRegionData

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that contains the data for a QuickDraw region.

> Tween media is deprecated in the QuickTime file format. The information that follows documents existing content containing tween media and should not be used for new development.

<a id="Overview"></a>

## Overview

Used only by a `kTweenTypeQDRegion` atom.

Its parent atom is a `kTweenEntry` atom.

A `kTweenEntry` atom can contain only one `kTweenRegionData` or `kTweenPictureData` atom. The ID of this atom is always `1`. The index of this atom is always `1`.

This atom is a leaf atom. The data type of its data is `Region`.

Either a `kTweenPictureData` or `kTweenRegionData` atom is required for a `kTweenTypeQDRegion` tween.

## See Also

### Region Tween Atoms

- [kTweenPictureData](ktweenpicturedata.md): Deprecated. An atom that contains the data for a QuickDraw picture.
- [kTweenSequenceElement](ktweensequenceelement.md): Deprecated. An atom that specifies an entry in a tween sequence.
