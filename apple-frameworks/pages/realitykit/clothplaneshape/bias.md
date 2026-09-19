> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothplaneshape/bias

# bias

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The distance by which the surface of the plane shape is displaced along the direction of its normal.

## Declaration

```swift
var bias: Float
```

<a id="discussion"></a>

## Discussion

This can be used to extend a plane collider slightly above its visual counterpart in order to avoid z-fighting.
