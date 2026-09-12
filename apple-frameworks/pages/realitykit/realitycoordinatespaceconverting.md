> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespaceconverting](https://developer.apple.com/documentation/realitykit/realitycoordinatespaceconverting)

# RealityCoordinateSpaceConverting

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** visionOS 1.0+

A value that can be converted between SwiftUI `CoordinateSpace` and RealityKit `Entity`.

## Declaration

```swift
protocol RealityCoordinateSpaceConverting
```

## Topics

### Instance Methods

- [convert(\_:from:to:)](realitycoordinatespaceconverting/convert%28__from_to_%29.md): Converts a `Point3D` from a defined SwiftUI coordinate space to a 3D point in a RealityKit coordinate space.
- [convert(boundingBox:from:to:)](realitycoordinatespaceconverting/convert%28boundingbox_from_to_%29.md): Converts a BoundingBox from a RealityKit coordinate space to a Rect3D in a defined SwiftUI coordinate space.
- [convert(point:from:to:)](realitycoordinatespaceconverting/convert%28point_from_to_%29.md): Converts a 3D point from a RealityKit coordinate space to one in a SwiftUI coordinate space.
- [convert(rotation:from:to:)](realitycoordinatespaceconverting/convert%28rotation_from_to_%29.md): Converts a quaternion from a RealityKit coordinate space to a Rotation3D in a defined SwiftUI coordinate space.
- [convert(size:from:to:)](realitycoordinatespaceconverting/convert%28size_from_to_%29.md): Converts a 3D size vector from a RealityKit coordinate space to a Size3D in a defined SwiftUI coordinate space.
- [convert(transform:from:to:)](realitycoordinatespaceconverting/convert%28transform_from_to_%29.md): Returns an AffineTransform3D converted from a RealityKit coordinate space to a defined SwiftUI coordinate space.
- [convert(vector:from:to:)](realitycoordinatespaceconverting/convert%28vector_from_to_%29.md): Converts a 3D vector from a RealityKit coordinate space to one in a SwiftUI coordinate space.
- [transform(from:to:)](realitycoordinatespaceconverting/transform%28from_to_%29.md)

## Relationships

### Conforming Types

- [EntityTargetValue](entitytargetvalue.md)
- [RealityViewContent](realityviewcontent.md)

## See Also

### Coordinate space conversions

- [SceneRealityCoordinateSpace](scenerealitycoordinatespace.md): The coordinate space that represents the center of a RealityKit scene.
- [CameraRealityCoordinateSpace](camerarealitycoordinatespace.md): The coordinate space that represents the scene’s active camera.
- [RealityCoordinateSpace](realitycoordinatespace.md): A 3D coordinate space that exists within a RealityKit hierarchy.
- [RealityCoordinateSpaceProjecting](realitycoordinatespaceprojecting.md): A protocol for coordinate spaces that can project 2D points to and from 3D.
