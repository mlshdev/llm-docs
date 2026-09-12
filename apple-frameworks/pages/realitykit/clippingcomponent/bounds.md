> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clippingcomponent/bounds](https://developer.apple.com/documentation/realitykit/clippingcomponent/bounds)

# bounds

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The bounding box that defines the clipping region in the entity’s local coordinate space.

## Declaration

```swift
var bounds: BoundingBox
```

<a id="discussion"></a>

## Discussion

Content outside this bounding box will be clipped (hard edge or faded out based on feathering). The bounds are defined relative to the entity’s origin and are affected by the entity’s transform.
