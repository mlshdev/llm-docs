> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/shapeextrusionoptions/extrusionmethod-swift.enum/linear(depth:)](https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions/extrusionmethod-swift.enum/linear(depth:))

# MeshResource.ShapeExtrusionOptions.ExtrusionMethod.linear(depth:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Extrudes the shape with a linear extrusion in Z by the desired depth.

## Declaration

```swift
case linear(depth: Float)
```

<a id="discussion"></a>

## Discussion

For example an extrusion that has a linear depth of 0.6 meters:

```swift
var extrusionOptions = ShapeExtrusionOptions()
extrusionOptions.extrusionMethod = .linear(depth: 0.6)
```

![](https://developer.apple.com/images/com.apple.RealityKit/generateExtrudedShape-extrusionMethod-linear-red.jpg)

You can also use [MeshResource.ShapeExtrusionOptions.ExtrusionMethod.tracePositions(\_:)](tracepositions%28__%29.md) an equivalent way.

```swift
.tracePositions([
    [0, 0, -depth/2],
    [0, 0,  depth/2]
)
```
