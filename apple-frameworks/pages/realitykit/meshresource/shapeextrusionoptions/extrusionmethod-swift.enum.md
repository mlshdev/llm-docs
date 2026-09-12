> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/shapeextrusionoptions/extrusionmethod-swift.enum](https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions/extrusionmethod-swift.enum)

# MeshResource.ShapeExtrusionOptions.ExtrusionMethod

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The options that determine the way in which to extrude a swept shape in 3D.

## Declaration

```swift
enum ExtrusionMethod
```

## Topics

### Enumeration Cases

- [MeshResource.ShapeExtrusionOptions.ExtrusionMethod.linear(depth:)](extrusionmethod-swift.enum/linear%28depth_%29.md): Extrudes the shape with a linear extrusion in Z by the desired depth.
- [MeshResource.ShapeExtrusionOptions.ExtrusionMethod.tracePositions(\_:)](extrusionmethod-swift.enum/tracepositions%28__%29.md): Extrudes the shape by sweeping it along a piecewise-linear curve.
- [MeshResource.ShapeExtrusionOptions.ExtrusionMethod.traceTransforms(\_:)](extrusionmethod-swift.enum/tracetransforms%28__%29.md): Extrudes the shape by sweeping it along a piecewise-linear curve.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### 2D path extrusion for 3D mesh creation

- [MeshResource.ShapeExtrusionOptions](../shapeextrusionoptions.md): A type that determines the extrusion, chamfering, and material assignment of an extruded shape.
- [MeshResource.ShapeExtrusionOptions.MaterialAssignment](materialassignment-swift.struct.md): A type that determines the material assignments for each part of an extruded shape.
- [MeshResource.ShapeExtrusionOptions.ChamferMode](chamfermode-swift.enum.md): Determines which part of the extrusion to chamfer.
- [MeshResource.ShapeExtrusionOptions.CurveStrokeResolution](curvestrokeresolution.md): Designates the resolution at which a smooth curve is discretized.
