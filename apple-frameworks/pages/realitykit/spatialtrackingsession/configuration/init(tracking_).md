> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/spatialtrackingsession/configuration/init(tracking:)

# init(tracking:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a configuration with a set of anchor capabilities.

## Declaration

```swift
init(tracking capabilities: Set<SpatialTrackingSession.Configuration.AnchorCapability>)
```

## Parameters

- `capabilities`: The set of anchor capabilities to run with a [SpatialTrackingSession](../../spatialtrackingsession.md).
