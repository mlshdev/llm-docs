> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spatialtrackingsession/run(_:session:arconfiguration:)](https://developer.apple.com/documentation/realitykit/spatialtrackingsession/run(_:session:arconfiguration:))

# run(\_:session:arConfiguration:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Runs the spatial tracking session with a spatial tracking configuration, an AR session, and an AR configuration.

## Declaration

```swift
@discardableResult @MainActor final func run(_ configuration: SpatialTrackingSession.Configuration, session: ARSession, arConfiguration: ARConfiguration) async -> SpatialTrackingSession.UnavailableCapabilities?
```

## Parameters

- `configuration`: An object that configures the AR data that RealityKit uses in the spatial tracking session.
- `session`: An object that coordinates the major processes that ARKit performs on your behalf to create an augmented reality experience.
- `arConfiguration`: An object that defines motion and scene tracking behaviors for the session.

<a id="return-value"></a>

## Return Value

The unavailable capabilities based on the hardware and the user authorization.

<a id="discussion"></a>

## Discussion

You manage and run the [ARSession](../../arkit/arsession.md) for the `SpatialTrackingSession`.
