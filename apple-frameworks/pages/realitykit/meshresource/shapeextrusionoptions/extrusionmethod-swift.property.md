> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/shapeextrusionoptions/extrusionmethod-swift.property](https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions/extrusionmethod-swift.property)

# extrusionMethod

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Specifies the extrusion type applied to the swept shape in 3D space.

## Declaration

```swift
var extrusionMethod: MeshResource.ShapeExtrusionOptions.ExtrusionMethod
```

<a id="discussion"></a>

## Discussion

For example, use `.linear(depth: 0.25)` to extrude the shape in Z by 0.25 meters.
