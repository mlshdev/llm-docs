> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/boundingspherebox/radius

# radius

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The bounding sphere radius.

## Declaration

```swift
var radius: Float { get set }
```

<a id="discussion"></a>

## Discussion

Setting a smaller radius shrinks `halfExtents` to fit within the sphere when necessary.
