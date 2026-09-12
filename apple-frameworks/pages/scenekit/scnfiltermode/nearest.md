> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfiltermode/nearest](https://developer.apple.com/documentation/scenekit/scnfiltermode/nearest)

# SCNFilterMode.nearest (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Texture filtering returns the color from only one texel, whose location is nearest to the coordinates being sampled.

## Declaration

```swift
case nearest
```

## See Also

### Constants

- [SCNFilterMode.none](none.md): No texture filtering is applied.
- [SCNFilterMode.linear](linear.md): Texture filtering sample texels from the neighborhood of the coordinates being sampled and linearly interpolates their colors.

# SCNFilterModeNearest (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Texture filtering returns the color from only one texel, whose location is nearest to the coordinates being sampled.

## Declaration

```objectivec
SCNFilterModeNearest
```

## See Also

### Constants

- [SCNFilterModeNone](none.md): No texture filtering is applied.
- [SCNFilterModeLinear](linear.md): Texture filtering sample texels from the neighborhood of the coordinates being sampled and linearly interpolates their colors.
