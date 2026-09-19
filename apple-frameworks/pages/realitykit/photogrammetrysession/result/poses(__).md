> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/photogrammetrysession/result/poses(_:)

# PhotogrammetrySession.Result.poses(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Once initial photogrammetric calculations are complete, a data structure  mapping each sample ID (or index if a folder was used) to the 6DOF algorithmically estimated pose of that sample is returned.

## Declaration

```swift
case poses(PhotogrammetrySession.Poses)
```
