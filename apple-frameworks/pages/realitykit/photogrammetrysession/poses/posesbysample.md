> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysession/poses/posesbysample

# posesBySample

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Mapping from the sample ID to the 6DOF algorithmically estimated pose of that sample.  Each `Pose` will have a world translation and rotation representing that shot’s estimated pose (position and orientation in space) with respect to the estimated coordinate system.

## Declaration

```swift
let posesBySample: [Int : PhotogrammetrySession.Pose]
```
