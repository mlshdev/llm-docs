> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/event](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/event)

# USDPreviewSession.Event

**Framework:** SpatialPreview  
**Kind:** Enumeration  
**Availability:** macOS 27.0+ · visionOS

Events emitted during a USD preview session

## Declaration

```swift
enum Event
```

## Topics

### Enumeration Cases

- [USDPreviewSession.Event.error(\_:)](event/error%28__%29.md): Session error (editing read-only stage, etc.)
- [USDPreviewSession.Event.playbackStateChanged(isPlaying:)](event/playbackstatechanged%28isplaying_%29.md): The USD’s animation playback state has changed
- [USDPreviewSession.Event.timeChanged(\_:)](event/timechanged%28__%29.md): The USD animation timecode has changed

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session state and errors

- [SpatialPreviewSessionState](../spatialpreviewsessionstate.md): Indicates the state of the session and the health of the underlying connection.
- [SpatialPreviewSessionError](../spatialpreviewsessionerror.md)
- [ConnectedSpatialEndpointObserver.UnavailableError](../connectedspatialendpointobserver/unavailableerror.md): An error thrown when accessing the [endpoint](../connectedspatialendpointobserver/endpoint.md) property while no Mac Virtual Display device is available.
- [USDPreviewSession.Error](error.md): Errors that can occur during a USD preview session
