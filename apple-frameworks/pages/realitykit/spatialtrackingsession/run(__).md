> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/spatialtrackingsession/run(_:)

# run(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 2.0+

Runs the spatial tracking session with the specified configuration.

## Declaration

```swift
@discardableResult final func run(_ spatialTrackingConfiguration: SpatialTrackingSession.Configuration) async -> SpatialTrackingSession.UnavailableCapabilities?
```

## Parameters

- `spatialTrackingConfiguration`: An object that configures the AR data that RealityKit uses in the spatial tracking session.

<a id="return-value"></a>

## Return Value

The unavailable capabilities based on the hardware and the user authorization.
