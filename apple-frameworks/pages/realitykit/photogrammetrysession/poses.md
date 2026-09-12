> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/poses](https://developer.apple.com/documentation/realitykit/photogrammetrysession/poses)

# PhotogrammetrySession.Poses

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Once initial photogrammetric calculations are complete, a data structure mapping the sample ID (or index if a folder was used) to the 6DOF algorithmically estimated pose of that sample is returned.

## Declaration

```swift
struct Poses
```

## Topics

### Instance Properties

- [posesBySample](poses/posesbysample.md): Mapping from the sample ID to the 6DOF algorithmically estimated pose of that sample. Each `Pose` will have a world translation and rotation representing that shot’s estimated pose (position and orientation in space) with respect to the estimated coordinate system.
- [urlsBySample](poses/urlsbysample.md): Mapping from the sample ID to the image URL in the input folder corresponding to that sample ID. This simplifies the visualization of which image in the input folder corresponds to a given computed pose.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Obtaining results

- [PhotogrammetrySession.Result](result.md): An object that holds the created 3D object.
- [PhotogrammetrySession.PointCloud](pointcloud.md): A sparse point cloud data structure output as the payload of a `.pointCloud` request. A point cloud is an array of `PointCloud.Point` instances.
- [PhotogrammetrySession.Error](error.md): The errors that can occur during reconstruction in a photogrammetry session.
- [PhotogrammetrySession.Pose](pose.md): A 6DOF pose relative to the estimated coordinate system.
