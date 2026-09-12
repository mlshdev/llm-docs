> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnwrapmode/clamp](https://developer.apple.com/documentation/scenekit/scnwrapmode/clamp)

# SCNWrapMode.clamp (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.

## Declaration

```swift
case clamp
```

## Mentioned In

- [SCNClamp](../scnclamp.md)

<a id="Discussion"></a>

## Discussion

Texture sampling in areas whose texture coordinates would fall outside this range produces texel colors from the nearest edge of the texture image.

## See Also

### Constants

- [SCNWrapMode.repeat](repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapMode.clampToBorder](clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](../scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapMode.mirror](mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNClamp](../scnclamp.md): Equivalent to [SCNWrapMode.clamp](clamp.md).
- [SCNRepeat](../scnrepeat.md): Equivalent to [SCNWrapMode.repeat](repeat.md).
- [SCNClampToBorder](../scnclamptoborder.md): Equivalent to [SCNWrapMode.clampToBorder](clamptoborder.md).
- [SCNMirror](../scnmirror.md): Equivalent to [SCNWrapMode.mirror](mirror.md).

# SCNWrapModeClamp (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.

## Declaration

```objectivec
SCNWrapModeClamp
```

## Mentioned In

- [SCNClamp](../scnclamp.md)

<a id="Discussion"></a>

## Discussion

Texture sampling in areas whose texture coordinates would fall outside this range produces texel colors from the nearest edge of the texture image.

## See Also

### Constants

- [SCNWrapModeRepeat](repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapModeClampToBorder](clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](../scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapModeMirror](mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNClamp](../scnclamp.md): Equivalent to [SCNWrapModeClamp](clamp.md).
- [SCNRepeat](../scnrepeat.md): Equivalent to [SCNWrapModeRepeat](repeat.md).
- [SCNClampToBorder](../scnclamptoborder.md): Equivalent to [SCNWrapModeClampToBorder](clamptoborder.md).
- [SCNMirror](../scnmirror.md): Equivalent to [SCNWrapModeMirror](mirror.md).
