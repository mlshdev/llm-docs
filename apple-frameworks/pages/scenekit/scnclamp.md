> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnclamp](https://developer.apple.com/documentation/scenekit/scnclamp)

# SCNClamp (Swift)

**Framework:** SceneKit  
**Kind:** Article

Equivalent to [SCNWrapMode.clamp](scnwrapmode/clamp.md).

<a id="overview"></a>

## Overview

Deprecated in OS X v10.9. Use [SCNWrapMode.clamp](scnwrapmode/clamp.md) instead.

## See Also

### Constants

- [SCNWrapMode.clamp](scnwrapmode/clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapMode.repeat](scnwrapmode/repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapMode.clampToBorder](scnwrapmode/clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapMode.mirror](scnwrapmode/mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNRepeat](scnrepeat.md): Equivalent to [SCNWrapMode.repeat](scnwrapmode/repeat.md).
- [SCNClampToBorder](scnclamptoborder.md): Equivalent to [SCNWrapMode.clampToBorder](scnwrapmode/clamptoborder.md).
- [SCNMirror](scnmirror.md): Equivalent to [SCNWrapMode.mirror](scnwrapmode/mirror.md).

# SCNClamp (Objective-C)

**Framework:** SceneKit  
**Kind:** Article

Equivalent to [SCNWrapModeClamp](scnwrapmode/clamp.md).

<a id="overview"></a>

## Overview

Deprecated in OS X v10.9. Use [SCNWrapModeClamp](scnwrapmode/clamp.md) instead.

## See Also

### Constants

- [SCNWrapModeClamp](scnwrapmode/clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapModeRepeat](scnwrapmode/repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapModeClampToBorder](scnwrapmode/clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapModeMirror](scnwrapmode/mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNRepeat](scnrepeat.md): Equivalent to [SCNWrapModeRepeat](scnwrapmode/repeat.md).
- [SCNClampToBorder](scnclamptoborder.md): Equivalent to [SCNWrapModeClampToBorder](scnwrapmode/clamptoborder.md).
- [SCNMirror](scnmirror.md): Equivalent to [SCNWrapModeMirror](scnwrapmode/mirror.md).
