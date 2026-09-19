> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/spatialtrackingsession/configuration/init(tracking:sceneunderstanding:camera:)

# init(tracking:sceneUnderstanding:camera:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a configuration with anchor capabilities, scene-understanding capabilities, and camera feeds.

## Declaration

```swift
init(tracking anchorCapabilities: Set<SpatialTrackingSession.Configuration.AnchorCapability> = [], sceneUnderstanding: Set<SpatialTrackingSession.Configuration.SceneUnderstandingCapability> = [], camera: SpatialTrackingSession.Configuration.Camera = .back)
```

## Parameters

- `anchorCapabilities`: The set of anchor capabilities to run with a [SpatialTrackingSession](../../spatialtrackingsession.md).
- `sceneUnderstanding`: The set of scene-understanding capabilities to run with a [SpatialTrackingSession](../../spatialtrackingsession.md).
- `camera`: The camera feed to run with a [SpatialTrackingSession](../../spatialtrackingsession.md).
