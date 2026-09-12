> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespaceprojecting](https://developer.apple.com/documentation/realitykit/realitycoordinatespaceprojecting)

# RealityCoordinateSpaceProjecting

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

A protocol for coordinate spaces that can project 2D points to and from 3D.

## Declaration

```swift
protocol RealityCoordinateSpaceProjecting
```

## Topics

### Instance Methods

- [entities(at:in:)](realitycoordinatespaceprojecting/entities%28at_in_%29.md): Finds all the hit entities when projecting a ray from a starting point.
- [entity(at:in:)](realitycoordinatespaceprojecting/entity%28at_in_%29.md): Finds the first entity hit when projecting a ray from a starting point.
- [hitTest(point:in:query:mask:)](realitycoordinatespaceprojecting/hittest%28point_in_query_mask_%29.md): Searches the scene for entities at the specified point in the view.
- [project(point:to:)](realitycoordinatespaceprojecting/project%28point_to_%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the reality view.
- [ray(through:in:to:)](realitycoordinatespaceprojecting/ray%28through_in_to_%29.md): Determines the position and direction of a ray through the given point in the 2D space of the view.
- [unproject(\_:from:to:ontoPlane:)](realitycoordinatespaceprojecting/unproject%28__from_to_ontoplane_%29.md): Unprojects a point from the view onto a plane in 3D world coordinates.

## Relationships

### Conforming Types

- [EntityTargetValue](entitytargetvalue.md)
- [RealityViewCameraContent](realityviewcameracontent.md)

## See Also

### Coordinate space conversions

- [RealityCoordinateSpaceConverting](realitycoordinatespaceconverting.md): A value that can be converted between SwiftUI `CoordinateSpace` and RealityKit `Entity`.
- [SceneRealityCoordinateSpace](scenerealitycoordinatespace.md): The coordinate space that represents the center of a RealityKit scene.
- [CameraRealityCoordinateSpace](camerarealitycoordinatespace.md): The coordinate space that represents the scene’s active camera.
- [RealityCoordinateSpace](realitycoordinatespace.md): A 3D coordinate space that exists within a RealityKit hierarchy.
