> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/spatialtrackingsession/unavailablecapabilities/anchor

# anchor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 2.0+

A type that contains all unavailable anchor capabilities.

## Declaration

```swift
var anchor: Set<SpatialTrackingSession.Configuration.AnchorCapability> { get }
```

<a id="discussion"></a>

## Discussion

The system marks certain anchor capabilities as unavailable if:

- The device running your app doesn’t support them.
- The person using the device doesn’t approve the corresponding ARKit authorization.
