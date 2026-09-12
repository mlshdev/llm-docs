> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/pose](https://developer.apple.com/documentation/realitykit/photogrammetrysession/pose)

# PhotogrammetrySession.Pose

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A 6DOF pose relative to the estimated coordinate system.

## Declaration

```swift
struct Pose
```

## Topics

### Instance Properties

- [intrinsics](pose/intrinsics.md): If available, the estimated pinhole camera intrinsics matrix associated with the input image. If not available, `nil`.
- [lensDistortionData](pose/lensdistortiondata.md): If available, the estimated lens distortion data for the associated input image. This can be used to rectify the image for computer vision applications. If not available, this is nil.
- [rotation](pose/rotation.md): Rotation (orientation) of the pose relative to the reference coordinate system.
- [transform](pose/transform.md): A unit scale transform that represents a 6DoF pose.
- [translation](pose/translation.md): Position of the pose relative to the reference coordinate system.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Obtaining results

- [PhotogrammetrySession.Result](result.md): An object that holds the created 3D object.
- [PhotogrammetrySession.PointCloud](pointcloud.md): A sparse point cloud data structure output as the payload of a `.pointCloud` request. A point cloud is an array of `PointCloud.Point` instances.
- [PhotogrammetrySession.Error](error.md): The errors that can occur during reconstruction in a photogrammetry session.
- [PhotogrammetrySession.Poses](poses.md): Once initial photogrammetric calculations are complete, a data structure mapping the sample ID (or index if a folder was used) to the 6DOF algorithmically estimated pose of that sample is returned.
