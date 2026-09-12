> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/connectedspatialendpointobserver](https://developer.apple.com/documentation/spatialpreview/connectedspatialendpointobserver)

# ConnectedSpatialEndpointObserver

**Framework:** Spatial Preview  
**Kind:** Class  
**Availability:** macOS 27.0+ · visionOS

An observer that provides access to the endpoint for a device connected via Mac Virtual Display.

## Declaration

```swift
@MainActor final class ConnectedSpatialEndpointObserver
```

<a id="overview"></a>

## Overview

You can choose to discover another device using [SpatialPreviewDevicePicker](spatialpreviewdevicepicker.md).

## Topics

### Structures

- [ConnectedSpatialEndpointObserver.UnavailableError](connectedspatialendpointobserver/unavailableerror.md): An error thrown when accessing the [endpoint](connectedspatialendpointobserver/endpoint.md) property while no Mac Virtual Display device is available.

### Initializers

- [init()](connectedspatialendpointobserver/init%28%29.md): Creates a new observer for monitoring connected device endpoint availability.

### Instance Properties

- [endpoint](connectedspatialendpointobserver/endpoint.md): The endpoint for the visionOS device currently connected via Mac Virtual Display.
- [isEndpointAvailable](connectedspatialendpointobserver/isendpointavailable.md): Indicates whether a connected device endpoint is currently connected.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Nearby devices

- [SpatialPreviewEndpoint](spatialpreviewendpoint.md): An endpoint representing a visionOS device you can connect to for spatial preview.
- [SpatialPreviewDevicePicker](spatialpreviewdevicepicker.md): Presents nearby companion devices and allows the user to make a selection.
