> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingspherebox/radius](https://developer.apple.com/documentation/realitykit/boundingspherebox/radius)

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
