> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/connectedspatialendpointobserver/isendpointavailable

# isEndpointAvailable

**Framework:** Spatial Preview  
**Kind:** Instance Property  
**Availability:** macOS 27.0+ · visionOS

Indicates whether a connected device endpoint is currently connected.

## Declaration

```swift
@MainActor final var isEndpointAvailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is `true` when a visionOS device is connected via Mac Virtual Display.
