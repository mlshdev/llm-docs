> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/connectedspatialendpointobserver/endpoint

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
