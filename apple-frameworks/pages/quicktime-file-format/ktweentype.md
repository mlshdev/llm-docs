> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/ktweentype](https://developer.apple.com/documentation/quicktime-file-format/ktweentype)

# kTweenType

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that specifies the tween type, which is the data type of the data for the tween operation.

> Tween media is deprecated in the QuickTime file format. The information that follows documents existing content containing tween media and should not be used for new development.

<a id="Overview"></a>

## Overview

Its parent atom is a `kTweenEntry` atom.

A `kTweenEntry` atom can contain only one `kTweenType` atom. The ID of this atom is always `1`. The index of this atom is always `1`.

This atom is a leaf atom. The data type of its data is `OSType`.

This atom is required.

## See Also

### General tween atoms

- [kTweenEntry](ktweenentry.md): Deprecated. A tween atom, which can be either a single tween atom, a tween atom in a tween sequence, or an interpolation tween atom.
- [kTweenStartOffset](ktweenstartoffset.md): Deprecated. An atom that specifies a time offset from the start of the tween media sample to the start of the tween atom.
- [kTweenDuration](ktweenduration.md): Deprecated. An atom that specifies the duration of a tween operation.
- [kTweenData](ktweendata.md): Deprecated. An atom that contains data for a tween atom.
- [kNameAtom](knameatom.md): Deprecated. An atom that specifies the name of a tween atom.
