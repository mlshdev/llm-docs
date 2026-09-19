> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/sceneevents/trackingstateupdate

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
