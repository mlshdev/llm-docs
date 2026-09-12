> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/manipulationevents/willend](https://developer.apple.com/documentation/realitykit/manipulationevents/willend)

# ManipulationEvents.WillEnd

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

The event that occurs at the end of a manipulation gesture, when the entity has reached its resting position, destination and the system no longer updates it.

## Declaration

```swift
struct WillEnd
```

## Topics

### Instance Properties

- [entity](willend/entity.md): The component’s entity.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting manipulation gesture events

- [ManipulationEvents.WillBegin](willbegin.md): The event that occurs when someone is about to start an entity manipulation gesture.
- [ManipulationEvents.DidUpdateTransform](didupdatetransform.md): The event that occurs repeatedly when the entity’s transform updates during a manipulation gesture.
- [ManipulationEvents.DidHandOff](didhandoff.md): The event that occurs during a manipulation gesture when someone passes an entity from one hand to the other.
- [ManipulationEvents.WillRelease](willrelease.md): The event that occurs just as someone releases an entity during a manipulation gesture.
