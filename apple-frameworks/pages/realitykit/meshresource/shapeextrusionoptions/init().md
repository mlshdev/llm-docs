> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/shapeextrusionoptions/init()](https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions/init())

# init()

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates the shape extrusion options with default values.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

By default, the extrusion method is [MeshResource.ShapeExtrusionOptions.ExtrusionMethod.linear(depth:)](extrusionmethod-swift.enum/linear%28depth_%29.md), with a depth of 0.25m, and all sides are assigned the first material.
