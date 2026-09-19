> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scenekit/scndebugoptions/showfeaturepoints

# showFeaturePoints

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Display a point cloud showing intermediate results of the scene analysis that ARKit uses to track device position.

## Declaration

```swift
static let showFeaturePoints: SCNDebugOptions
```

<a id="Discussion"></a>

## Discussion

This option is available only when running a [ARWorldTrackingConfiguration](../../arkit/arworldtrackingconfiguration.md) session.
