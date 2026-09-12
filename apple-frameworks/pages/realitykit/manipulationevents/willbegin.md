> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/manipulationevents/willbegin](https://developer.apple.com/documentation/realitykit/manipulationevents/willbegin)

# ManipulationEvents.WillBegin

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

The event that occurs when someone is about to start an entity manipulation gesture.

## Declaration

```swift
struct WillBegin
```

## Topics

### Instance Properties

- [entity](willbegin/entity.md): The component’s entity.
- [inputDeviceSet](willbegin/inputdeviceset.md): The input element that triggered the interaction.
- [pivotPoint](willbegin/pivotpoint.md): This point is in the coordinate space configured in the view modifier.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting manipulation gesture events

- [ManipulationEvents.DidUpdateTransform](didupdatetransform.md): The event that occurs repeatedly when the entity’s transform updates during a manipulation gesture.
- [ManipulationEvents.DidHandOff](didhandoff.md): The event that occurs during a manipulation gesture when someone passes an entity from one hand to the other.
- [ManipulationEvents.WillRelease](willrelease.md): The event that occurs just as someone releases an entity during a manipulation gesture.
- [ManipulationEvents.WillEnd](willend.md): The event that occurs at the end of a manipulation gesture, when the entity has reached its resting position, destination and the system no longer updates it.
