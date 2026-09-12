> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/shapeextrusionoptions/curvestrokeresolution](https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions/curvestrokeresolution)

# MeshResource.ShapeExtrusionOptions.CurveStrokeResolution

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Designates the resolution at which a smooth curve is discretized.

## Declaration

```swift
enum CurveStrokeResolution
```

## Topics

### Enumeration Cases

- [MeshResource.ShapeExtrusionOptions.CurveStrokeResolution.uniformSegmentsPerSpan(segmentCount:)](curvestrokeresolution/uniformsegmentsperspan%28segmentcount_%29.md): For each span of the curve, generates a uniform number of segments.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### 2D path extrusion for 3D mesh creation

- [MeshResource.ShapeExtrusionOptions](../shapeextrusionoptions.md): A type that determines the extrusion, chamfering, and material assignment of an extruded shape.
- [MeshResource.ShapeExtrusionOptions.MaterialAssignment](materialassignment-swift.struct.md): A type that determines the material assignments for each part of an extruded shape.
- [MeshResource.ShapeExtrusionOptions.ChamferMode](chamfermode-swift.enum.md): Determines which part of the extrusion to chamfer.
- [MeshResource.ShapeExtrusionOptions.ExtrusionMethod](extrusionmethod-swift.enum.md): The options that determine the way in which to extrude a swept shape in 3D.
