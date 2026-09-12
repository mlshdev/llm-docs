> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnwrapmode/mirror](https://developer.apple.com/documentation/scenekit/scnwrapmode/mirror)

# SCNWrapMode.mirror (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.

## Declaration

```swift
case mirror
```

## Mentioned In

- [SCNMirror](../scnmirror.md)

<a id="Discussion"></a>

## Discussion

Texture sampling in areas of the material whose texture coordinates would fall outside from `0.0` to `1.0` results in tiling both texture image and its mirror image across the surface using the material.

## See Also

### Constants

- [SCNWrapMode.clamp](clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapMode.repeat](repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapMode.clampToBorder](clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](../scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNClamp](../scnclamp.md): Equivalent to [SCNWrapMode.clamp](clamp.md).
- [SCNRepeat](../scnrepeat.md): Equivalent to [SCNWrapMode.repeat](repeat.md).
- [SCNClampToBorder](../scnclamptoborder.md): Equivalent to [SCNWrapMode.clampToBorder](clamptoborder.md).
- [SCNMirror](../scnmirror.md): Equivalent to [SCNWrapMode.mirror](mirror.md).

# SCNWrapModeMirror (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.

## Declaration

```objectivec
SCNWrapModeMirror
```

## Mentioned In

- [SCNMirror](../scnmirror.md)

<a id="Discussion"></a>

## Discussion

Texture sampling in areas of the material whose texture coordinates would fall outside from `0.0` to `1.0` results in tiling both texture image and its mirror image across the surface using the material.

## See Also

### Constants

- [SCNWrapModeClamp](clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapModeRepeat](repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapModeClampToBorder](clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](../scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNClamp](../scnclamp.md): Equivalent to [SCNWrapModeClamp](clamp.md).
- [SCNRepeat](../scnrepeat.md): Equivalent to [SCNWrapModeRepeat](repeat.md).
- [SCNClampToBorder](../scnclamptoborder.md): Equivalent to [SCNWrapModeClampToBorder](clamptoborder.md).
- [SCNMirror](../scnmirror.md): Equivalent to [SCNWrapModeMirror](mirror.md).
