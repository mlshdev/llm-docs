> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/spatialpreviewsessionerror](https://developer.apple.com/documentation/spatialpreview/spatialpreviewsessionerror)

# SpatialPreviewSessionError

**Framework:** Spatial Preview  
**Kind:** Enumeration  
**Availability:** macOS 27.0+ · visionOS

## Declaration

```swift
enum SpatialPreviewSessionError
```

## Topics

### Enumeration Cases

- [SpatialPreviewSessionError.invalidSpatialPreviewEndpoint](spatialpreviewsessionerror/invalidspatialpreviewendpoint.md): Use of an invalid spatial preview device
- [SpatialPreviewSessionError.invalidated](spatialpreviewsessionerror/invalidated.md)
- [SpatialPreviewSessionError.tooManySessions](spatialpreviewsessionerror/toomanysessions.md): Reached a maximum number of sessions for the receiving device

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session state and errors

- [SpatialPreviewSessionState](spatialpreviewsessionstate.md): Indicates the state of the session and the health of the underlying connection.
- [ConnectedSpatialEndpointObserver.UnavailableError](connectedspatialendpointobserver/unavailableerror.md): An error thrown when accessing the [endpoint](connectedspatialendpointobserver/endpoint.md) property while no Mac Virtual Display device is available.
- [USDPreviewSession.Error](usdpreviewsession/error.md): Errors that can occur during a USD preview session
- [USDPreviewSession.Event](usdpreviewsession/event.md): Events emitted during a USD preview session
