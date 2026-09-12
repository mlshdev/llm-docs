> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/spatialpreviewsessionstate](https://developer.apple.com/documentation/spatialpreview/spatialpreviewsessionstate)

# SpatialPreviewSessionState

**Framework:** Spatial Preview  
**Kind:** Enumeration  
**Availability:** macOS 27.0+ · visionOS

Indicates the state of the session and the health of the underlying connection.

## Declaration

```swift
enum SpatialPreviewSessionState
```

## Mentioned In

- [Bridging an external USD runtime to Spatial Preview](bridging-an-external-usd-runtime-to-spatial-preview.md)

## Topics

### Enumeration Cases

- [SpatialPreviewSessionState.connected](spatialpreviewsessionstate/connected.md): The session is actively connected
- [SpatialPreviewSessionState.interrupted](spatialpreviewsessionstate/interrupted.md): The session connection has been interrupted, but may resume.
- [SpatialPreviewSessionState.invalidated](spatialpreviewsessionstate/invalidated.md): The sesion has been invalidated and is no longer available.
- [SpatialPreviewSessionState.waiting](spatialpreviewsessionstate/waiting.md): The session has been created, but not started.

### Instance Properties

- [isInvalidated](spatialpreviewsessionstate/isinvalidated.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session state and errors

- [SpatialPreviewSessionError](spatialpreviewsessionerror.md)
- [ConnectedSpatialEndpointObserver.UnavailableError](connectedspatialendpointobserver/unavailableerror.md): An error thrown when accessing the [endpoint](connectedspatialendpointobserver/endpoint.md) property while no Mac Virtual Display device is available.
- [USDPreviewSession.Error](usdpreviewsession/error.md): Errors that can occur during a USD preview session
- [USDPreviewSession.Event](usdpreviewsession/event.md): Events emitted during a USD preview session
