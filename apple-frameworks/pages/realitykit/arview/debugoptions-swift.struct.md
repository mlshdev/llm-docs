> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/debugoptions-swift.struct](https://developer.apple.com/documentation/realitykit/arview/debugoptions-swift.struct)

# ARView.DebugOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

Options for drawing overlay content in a scene that can aid in debugging.

## Declaration

```swift
struct DebugOptions
```

## Topics

### Configuring debug options

- [none](debugoptions-swift.struct/none.md): Disable all debugging overlays.
- [showPhysics](debugoptions-swift.struct/showphysics.md): Draw visualizations for collision objects and rigid bodies.
- [showStatistics](debugoptions-swift.struct/showstatistics.md): Collect performance statistics and display them in the view.
- [showAnchorOrigins](debugoptions-swift.struct/showanchororigins.md): Display anchor origins.
- [showAnchorGeometry](debugoptions-swift.struct/showanchorgeometry.md): Display anchor geometry.
- [showWorldOrigin](debugoptions-swift.struct/showworldorigin.md): Display a coordinate axis indicating the position and orientation of the AR world coordinate system.
- [showFeaturePoints](debugoptions-swift.struct/showfeaturepoints.md): Display a point cloud showing intermediate results of the scene analysis used to track device position.
- [showSceneUnderstanding](debugoptions-swift.struct/showsceneunderstanding.md): Display the depth-colored wireframe for scene-understanding meshes.

### Creating a debug option set

- [init(rawValue:)](debugoptions-swift.struct/init%28rawvalue_%29.md): Create a debug options enumeration from a raw value.
- [rawValue](debugoptions-swift.struct/rawvalue.md): Options for drawing overlay content in a scene that aids in debugging the scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### UIKit and AppKit presentation

- [ARView](../arview.md): A view that enables you to display an AR experience with RealityKit.
- [ARViewBase](../arviewbase.md): The platform-specific base class for the view into which RealityKit renders content.
