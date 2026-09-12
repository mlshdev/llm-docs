> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/shapeextrusionoptions](https://developer.apple.com/documentation/realitykit/meshresource/shapeextrusionoptions)

# MeshResource.ShapeExtrusionOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A type that determines the extrusion, chamfering, and material assignment of an extruded shape.

## Declaration

```swift
struct ShapeExtrusionOptions
```

## Topics

### Structures

- [MeshResource.ShapeExtrusionOptions.MaterialAssignment](shapeextrusionoptions/materialassignment-swift.struct.md): A type that determines the material assignments for each part of an extruded shape.

### Initializers

- [init()](shapeextrusionoptions/init%28%29.md): Creates the shape extrusion options with default values.

### Instance Properties

- [boundaryResolution](shapeextrusionoptions/boundaryresolution.md): Resolution of the shape.
- [chamferMode](shapeextrusionoptions/chamfermode-swift.property.md): Determines if the front, back or both sides should be chamfered.
- [chamferProfile](shapeextrusionoptions/chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
- [chamferRadius](shapeextrusionoptions/chamferradius.md): The width or depth, in meters, of each chamfered edge.
- [chamferResolution](shapeextrusionoptions/chamferresolution.md): Resolution of the chamfer curve.
- [extrusionMethod](shapeextrusionoptions/extrusionmethod-swift.property.md): Specifies the extrusion type applied to the swept shape in 3D space.
- [materialAssignment](shapeextrusionoptions/materialassignment-swift.property.md): Determines the material assignments for each part of an extruded shape.

### Enumerations

- [MeshResource.ShapeExtrusionOptions.ChamferMode](shapeextrusionoptions/chamfermode-swift.enum.md): Determines which part of the extrusion to chamfer.
- [MeshResource.ShapeExtrusionOptions.CurveStrokeResolution](shapeextrusionoptions/curvestrokeresolution.md): Designates the resolution at which a smooth curve is discretized.
- [MeshResource.ShapeExtrusionOptions.ExtrusionMethod](shapeextrusionoptions/extrusionmethod-swift.enum.md): The options that determine the way in which to extrude a swept shape in 3D.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### 2D path extrusion for 3D mesh creation

- [MeshResource.ShapeExtrusionOptions.MaterialAssignment](shapeextrusionoptions/materialassignment-swift.struct.md): A type that determines the material assignments for each part of an extruded shape.
- [MeshResource.ShapeExtrusionOptions.ChamferMode](shapeextrusionoptions/chamfermode-swift.enum.md): Determines which part of the extrusion to chamfer.
- [MeshResource.ShapeExtrusionOptions.CurveStrokeResolution](shapeextrusionoptions/curvestrokeresolution.md): Designates the resolution at which a smooth curve is discretized.
- [MeshResource.ShapeExtrusionOptions.ExtrusionMethod](shapeextrusionoptions/extrusionmethod-swift.enum.md): The options that determine the way in which to extrude a swept shape in 3D.
