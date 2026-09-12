> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/result](https://developer.apple.com/documentation/realitykit/photogrammetrysession/result)

# PhotogrammetrySession.Result

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that holds the created 3D object.

## Declaration

```swift
enum Result
```

<a id="overview"></a>

## Overview

When [PhotogrammetrySession](../photogrammetrysession.md) completes a [PhotogrammetrySession.Request](request.md), it publishes a [PhotogrammetrySession.Output.requestComplete(\_:\_:)](output/requestcomplete%28____%29.md) message to output, and includes the created object as the associated value of the result parameter. The result type corresponds to the request type. For example, a [PhotogrammetrySession.Request.modelFile(url:detail:geometry:)](request/modelfile%28url_detail_geometry_%29.md) request results in the session publishing a [PhotogrammetrySession.Result.modelFile(\_:)](result/modelfile%28__%29.md).

## Topics

### Types of output

- [PhotogrammetrySession.Result.modelFile(\_:)](result/modelfile%28__%29.md): The result of a request for a USDZ file.
- [PhotogrammetrySession.Result.modelEntity(\_:)](result/modelentity%28__%29.md): The result of a request for an in-memory entity.
- [PhotogrammetrySession.Result.bounds(\_:)](result/bounds%28__%29.md): The result of a request for a bounding box.

### Enumeration Cases

- [PhotogrammetrySession.Result.pointCloud(\_:)](result/pointcloud%28__%29.md): The result of a request for a point cloud.
- [PhotogrammetrySession.Result.poses(\_:)](result/poses%28__%29.md): Once initial photogrammetric calculations are complete, a data structure mapping each sample ID (or index if a folder was used) to the 6DOF algorithmically estimated pose of that sample is returned.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Obtaining results

- [PhotogrammetrySession.PointCloud](pointcloud.md): A sparse point cloud data structure output as the payload of a `.pointCloud` request. A point cloud is an array of `PointCloud.Point` instances.
- [PhotogrammetrySession.Error](error.md): The errors that can occur during reconstruction in a photogrammetry session.
- [PhotogrammetrySession.Pose](pose.md): A 6DOF pose relative to the estimated coordinate system.
- [PhotogrammetrySession.Poses](poses.md): Once initial photogrammetric calculations are complete, a data structure mapping the sample ID (or index if a folder was used) to the 6DOF algorithmically estimated pose of that sample is returned.
