> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/connectedspatialendpointobserver/isendpointavailable](https://developer.apple.com/documentation/spatialpreview/connectedspatialendpointobserver/isendpointavailable)

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
