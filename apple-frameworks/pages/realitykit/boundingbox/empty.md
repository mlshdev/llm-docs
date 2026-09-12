> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingbox/empty](https://developer.apple.com/documentation/realitykit/boundingbox/empty)

# empty

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An empty bounding box.

## Declaration

```swift
static let empty: BoundingBox
```

<a id="discussion"></a>

## Discussion

An empty bounding box is defined with [min](min.md) set to positive infinity and [max](max.md) set to negative infinity.

> **Note**

> An empty bounding box where [min](min.md) is greater than [max](max.md) is different from a bounding box of size 0, where [min](min.md)  is equal to [max](max.md). The former defines empty space without a position. The latter describes an object of size 0 at a certain position in space.
