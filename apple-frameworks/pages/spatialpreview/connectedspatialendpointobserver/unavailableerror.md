> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/connectedspatialendpointobserver/unavailableerror](https://developer.apple.com/documentation/spatialpreview/connectedspatialendpointobserver/unavailableerror)

# ConnectedSpatialEndpointObserver.UnavailableError

**Framework:** Spatial Preview  
**Kind:** Structure  
**Availability:** macOS 27.0+ · visionOS

An error thrown when accessing the [endpoint](endpoint.md) property while no Mac Virtual Display device is available.

## Declaration

```swift
struct UnavailableError
```

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session state and errors

- [SpatialPreviewSessionState](../spatialpreviewsessionstate.md): Indicates the state of the session and the health of the underlying connection.
- [SpatialPreviewSessionError](../spatialpreviewsessionerror.md)
- [USDPreviewSession.Error](../usdpreviewsession/error.md): Errors that can occur during a USD preview session
- [USDPreviewSession.Event](../usdpreviewsession/event.md): Events emitted during a USD preview session
