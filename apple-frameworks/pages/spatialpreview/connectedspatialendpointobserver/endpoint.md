> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/connectedspatialendpointobserver/endpoint](https://developer.apple.com/documentation/spatialpreview/connectedspatialendpointobserver/endpoint)

# endpoint

**Framework:** Spatial Preview  
**Kind:** Instance Property  
**Availability:** macOS 27.0+ · visionOS

The endpoint for the visionOS device currently connected via Mac Virtual Display.

## Declaration

```swift
@MainActor final var endpoint: SpatialPreviewEndpoint { get async throws }
```

<a id="discussion"></a>

## Discussion

Check [isEndpointAvailable](isendpointavailable.md) before accessing this property to avoid catching an [ConnectedSpatialEndpointObserver.UnavailableError](unavailableerror.md).

> **Throws**

> [ConnectedSpatialEndpointObserver.UnavailableError](unavailableerror.md) if no device is currently connected via Mac Virtual Display.
