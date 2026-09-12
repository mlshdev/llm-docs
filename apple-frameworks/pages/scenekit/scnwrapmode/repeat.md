> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnwrapmode/repeat](https://developer.apple.com/documentation/scenekit/scnwrapmode/repeat)

# SCNWrapMode.repeat (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.

## Declaration

```swift
case `repeat`
```

## Mentioned In

- [SCNRepeat](../scnrepeat.md)

<a id="Discussion"></a>

## Discussion

Texture sampling in areas of the material whose texture coordinates would fall outside from `0.0` to `1.0` results in tiling the texture image across the surface using the material.

## See Also

### Constants

- [SCNWrapMode.clamp](clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapMode.clampToBorder](clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](../scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapMode.mirror](mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNClamp](../scnclamp.md): Equivalent to [SCNWrapMode.clamp](clamp.md).
- [SCNRepeat](../scnrepeat.md): Equivalent to [SCNWrapMode.repeat](repeat.md).
- [SCNClampToBorder](../scnclamptoborder.md): Equivalent to [SCNWrapMode.clampToBorder](clamptoborder.md).
- [SCNMirror](../scnmirror.md): Equivalent to [SCNWrapMode.mirror](mirror.md).

# SCNWrapModeRepeat (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.

## Declaration

```objectivec
SCNWrapModeRepeat
```

## Mentioned In

- [SCNRepeat](../scnrepeat.md)

<a id="Discussion"></a>

## Discussion

Texture sampling in areas of the material whose texture coordinates would fall outside from `0.0` to `1.0` results in tiling the texture image across the surface using the material.

## See Also

### Constants

- [SCNWrapModeClamp](clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapModeClampToBorder](clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](../scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapModeMirror](mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNClamp](../scnclamp.md): Equivalent to [SCNWrapModeClamp](clamp.md).
- [SCNRepeat](../scnrepeat.md): Equivalent to [SCNWrapModeRepeat](repeat.md).
- [SCNClampToBorder](../scnclamptoborder.md): Equivalent to [SCNWrapModeClampToBorder](clamptoborder.md).
- [SCNMirror](../scnmirror.md): Equivalent to [SCNWrapModeMirror](mirror.md).
