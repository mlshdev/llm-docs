> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfiltermode/none](https://developer.apple.com/documentation/scenekit/scnfiltermode/none)

# SCNFilterMode.none (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

No texture filtering is applied.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

Only valid for the [mipFilter](../scnmaterialproperty/mipfilter.md) property, specifying that SceneKit should not use mip mapping.

## See Also

### Constants

- [SCNFilterMode.nearest](nearest.md): Texture filtering returns the color from only one texel, whose location is nearest to the coordinates being sampled.
- [SCNFilterMode.linear](linear.md): Texture filtering sample texels from the neighborhood of the coordinates being sampled and linearly interpolates their colors.

# SCNFilterModeNone (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

No texture filtering is applied.

## Declaration

```objectivec
SCNFilterModeNone
```

<a id="Discussion"></a>

## Discussion

Only valid for the [mipFilter](../scnmaterialproperty/mipfilter.md) property, specifying that SceneKit should not use mip mapping.

## See Also

### Constants

- [SCNFilterModeNearest](nearest.md): Texture filtering returns the color from only one texel, whose location is nearest to the coordinates being sampled.
- [SCNFilterModeLinear](linear.md): Texture filtering sample texels from the neighborhood of the coordinates being sampled and linearly interpolates their colors.
