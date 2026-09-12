> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/event](https://developer.apple.com/documentation/arkit/arkitsession/event)

# ARKitSession.Event

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

Enumeration of possible session events.

## Declaration

```swift
enum Event
```

## Topics

### Enumeration Cases

- [ARKitSession.Event.authorizationChanged(type:status:)](event/authorizationchanged%28type_status_%29.md): An event that represents a change in authorization status for a specific authorization type.
- [ARKitSession.Event.dataProviderStateChanged(dataProviders:newState:error:)](event/dataproviderstatechanged%28dataproviders_newstate_error_%29.md): An event that represents a state change of one or more of the data providers associated with a session.

### Instance Properties

- [description](event/description.md): A textual representation of ARKitSession.Event

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing a session

- [events](events-swift.property.md): An asynchronous sequence of events that provide updates to the current authorization status of the session.
- [ARKitSession.Events](events-swift.struct.md): A sequence of events.
- [description](description.md): A textual representation of this session.
