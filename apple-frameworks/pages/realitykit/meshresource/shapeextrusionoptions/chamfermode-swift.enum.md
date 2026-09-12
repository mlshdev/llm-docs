> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/shapeextrusionoptions/chamfermode-swift.enum](https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions/chamfermode-swift.enum)

# MeshResource.ShapeExtrusionOptions.ChamferMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Determines which part of the extrusion to chamfer.

## Declaration

```swift
enum ChamferMode
```

## Topics

### Enumeration Cases

- [MeshResource.ShapeExtrusionOptions.ChamferMode.back](chamfermode-swift.enum/back.md): Only chamfer the back of the extrusion.
- [MeshResource.ShapeExtrusionOptions.ChamferMode.both](chamfermode-swift.enum/both.md): Chamfer both the front and the back of the extrusion.
- [MeshResource.ShapeExtrusionOptions.ChamferMode.front](chamfermode-swift.enum/front.md): Only chamfer the front of the extrusion.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### 2D path extrusion for 3D mesh creation

- [MeshResource.ShapeExtrusionOptions](../shapeextrusionoptions.md): A type that determines the extrusion, chamfering, and material assignment of an extruded shape.
- [MeshResource.ShapeExtrusionOptions.MaterialAssignment](materialassignment-swift.struct.md): A type that determines the material assignments for each part of an extruded shape.
- [MeshResource.ShapeExtrusionOptions.CurveStrokeResolution](curvestrokeresolution.md): Designates the resolution at which a smooth curve is discretized.
- [MeshResource.ShapeExtrusionOptions.ExtrusionMethod](extrusionmethod-swift.enum.md): The options that determine the way in which to extrude a swept shape in 3D.
