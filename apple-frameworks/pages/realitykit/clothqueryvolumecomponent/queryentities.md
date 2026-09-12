> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothqueryvolumecomponent/queryentities](https://developer.apple.com/documentation/realitykit/clothqueryvolumecomponent/queryentities)

# queryEntities

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The entities to query for intersections with the volume.

## Declaration

```swift
var queryEntities: [Entity]
```

<a id="discussion"></a>

## Discussion

Only entities with a [ClothBodyComponent](../clothbodycomponent.md) are included in the query; others are ignored.
