> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelsortgroup/planaruiplacement-swift.property](https://developer.apple.com/documentation/realitykit/modelsortgroup/planaruiplacement-swift.property)

# planarUIPlacement

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A planar placement instance that controls how the renderer draws a model relative to a planar mesh or a SwiftUI view that’s coplanar and overlapping.

## Declaration

```swift
var planarUIPlacement: ModelSortGroup.PlanarUIPlacement? { get }
```

<a id="discussion"></a>

## Discussion

Set to `nil` when the renderer doesn’t need planar sort the group. setting the property to `nil`.
