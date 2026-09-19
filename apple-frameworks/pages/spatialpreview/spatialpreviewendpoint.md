> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/spatialpreviewendpoint

# SpatialPreviewEndpoint

**Framework:** Spatial Preview  
**Kind:** Structure  
**Availability:** macOS 27.0+ · visionOS

An endpoint representing a visionOS device you can connect to for spatial preview.

## Declaration

```swift
struct SpatialPreviewEndpoint
```

<a id="overview"></a>

## Overview

Obtain an endpoint from [endpoint](connectedspatialendpointobserver/endpoint.md) when a device is connected via Mac Virtual Display, or let the user select one with [SpatialPreviewDevicePicker](spatialpreviewdevicepicker.md). Pass the endpoint to [start(endpoint:)](documentpreviewsession/start%28endpoint_%29.md) or [start(endpoint:parameters:viewerOptions:)](usdpreviewsession/start%28endpoint_parameters_vieweroptions_%29.md) to begin a session.

## Relationships

### Conforms To

- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Nearby devices

- [SpatialPreviewDevicePicker](spatialpreviewdevicepicker.md): Presents nearby companion devices and allows the user to make a selection.
- [ConnectedSpatialEndpointObserver](connectedspatialendpointobserver.md): An observer that provides access to the endpoint for a device connected via Mac Virtual Display.
