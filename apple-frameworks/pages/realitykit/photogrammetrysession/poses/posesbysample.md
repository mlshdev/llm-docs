> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/poses/posesbysample](https://developer.apple.com/documentation/realitykit/photogrammetrysession/poses/posesbysample)

# posesBySample

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Mapping from the sample ID to the 6DOF algorithmically estimated pose of that sample.  Each `Pose` will have a world translation and rotation representing that shot’s estimated pose (position and orientation in space) with respect to the estimated coordinate system.

## Declaration

```swift
let posesBySample: [Int : PhotogrammetrySession.Pose]
```
