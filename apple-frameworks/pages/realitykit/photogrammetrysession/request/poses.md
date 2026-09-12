> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request/poses](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request/poses)

# PhotogrammetrySession.Request.poses

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Requests the estimated pose of the camera in each shot (relative to the common estimated coordinate system shared with the `.bounds` request).

## Declaration

```swift
case poses
```

<a id="discussion"></a>

## Discussion

Once initial photogrammetric calculations are complete, a [PhotogrammetrySession.Poses](../poses.md) object will be returned with the estimated camera pose for each sample that was used in the reconstruction.
