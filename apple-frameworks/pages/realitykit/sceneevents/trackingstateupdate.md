> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sceneevents/trackingstateupdate](https://developer.apple.com/documentation/realitykit/sceneevents/trackingstateupdate)

# SceneEvents.TrackingStateUpdate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

An event type that signals a change of device tracking state.

## Declaration

```swift
struct TrackingStateUpdate
```

## Topics

### Instance Properties

- [current](trackingstateupdate/current.md): The current tracking state of the device.
- [previous](trackingstateupdate/previous.md): The previous tracking state of the device.

### Enumerations

- [SceneEvents.TrackingStateUpdate.State](trackingstateupdate/state.md): Constants that specify the current tracking status.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
