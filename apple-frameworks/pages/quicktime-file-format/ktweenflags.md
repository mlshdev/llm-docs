> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicktime-file-format/ktweenflags](https://developer.apple.com/documentation/quicktime-file-format/ktweenflags)

# kTweenFlags

**Framework:** QuickTime File Format  
**Kind:** Atom

An atom that contains flags that control the tween operation.

> Tween media is deprecated in the QuickTime file format. The information that follows documents existing content containing tween media and should not be used for new development.

<a id="Overview"></a>

## Overview

One flag that controls path tween atoms is defined:

- The `kTweenReturnDelta` flag applies only to path tween atoms (tweens of type `kTweenTypePathToFixedPoint`, `kTweenTypePathToMatrixTranslation`, `kTweenTypePathToMatrixTranslationAndRotation`, `kTweenTypePathXtoY`, or `kTweenTypePathYtoX`). If the flag is set, the tween component returns the change in value from the last time it was invoked. If the flag is not set, or if the tween component has not previously been invoked, the tween component returns the normal result for the tween atom.

Its parent atom is a `kTweenEntry` atom.

A `kTweenEntry` atom can contain only one `kTweenFlags` atom. The ID of this atom is always `1`. The index of this atom is always `1`.

This atom is a leaf atom. The data type of its data is `Long`.

This atom is optional. If it is not included, no flags are set.

## See Also

### Path Tween Atoms

- [kInitialRotationAtom](kinitialrotationatom.md): Deprecated. An atom that specifies an initial angle of rotation for a path tween atom.
