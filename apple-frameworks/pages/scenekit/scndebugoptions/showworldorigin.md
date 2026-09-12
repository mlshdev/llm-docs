> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scndebugoptions/showworldorigin](https://developer.apple.com/documentation/scenekit/scndebugoptions/showworldorigin)

# showWorldOrigin

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Display a coordinate axis visualization indicating the position and orientation of the AR world coordinate system.

## Declaration

```swift
static let showWorldOrigin: SCNDebugOptions
```

<a id="Discussion"></a>

## Discussion

This visualization is available to all session configurations and session [worldAlignment](../../arkit/arconfiguration/worldalignment-swift.property.md) options, but is most useful with a [ARWorldTrackingConfiguration](../../arkit/arworldtrackingconfiguration.md) session. For example, if you start running a session when this option is enabled, then take a step backward, the real-world position tracked by the AR world coordinate system should become visible on your device screen.
