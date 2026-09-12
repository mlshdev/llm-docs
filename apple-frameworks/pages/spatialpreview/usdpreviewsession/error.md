> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/error](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/error)

# USDPreviewSession.Error

**Framework:** SpatialPreview  
**Kind:** Enumeration  
**Availability:** macOS 27.0+ · visionOS

Errors that can occur during a USD preview session

## Declaration

```swift
enum Error
```

## Topics

### Enumeration Cases

- [USDPreviewSession.Error.assetUnshareable](error/assetunshareable.md): The stage became too complex to sync.
- [USDPreviewSession.Error.readOnlyStage](error/readonlystage.md): The stage was replaced during optimization and any changes made to the stage won’t be synced.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session state and errors

- [SpatialPreviewSessionState](../spatialpreviewsessionstate.md): Indicates the state of the session and the health of the underlying connection.
- [SpatialPreviewSessionError](../spatialpreviewsessionerror.md)
- [ConnectedSpatialEndpointObserver.UnavailableError](../connectedspatialendpointobserver/unavailableerror.md): An error thrown when accessing the [endpoint](../connectedspatialendpointobserver/endpoint.md) property while no Mac Virtual Display device is available.
- [USDPreviewSession.Event](event.md): Events emitted during a USD preview session
