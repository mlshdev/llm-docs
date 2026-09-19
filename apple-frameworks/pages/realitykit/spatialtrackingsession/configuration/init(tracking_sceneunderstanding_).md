> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/spatialtrackingsession/configuration/init(tracking:sceneunderstanding:)

# init(tracking:sceneUnderstanding:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates a configuration with a set of anchor capabilities and scene understanding capabilities.

## Declaration

```swift
init(tracking anchorCapabilities: Set<SpatialTrackingSession.Configuration.AnchorCapability> = [], sceneUnderstanding: Set<SpatialTrackingSession.Configuration.SceneUnderstandingCapability> = [])
```

## Parameters

- `anchorCapabilities`: The set of anchor capabilities to run with a [SpatialTrackingSession](../../spatialtrackingsession.md).
- `sceneUnderstanding`: The set of scene understanding capabilities to run with a [SpatialTrackingSession](../../spatialtrackingsession.md).
