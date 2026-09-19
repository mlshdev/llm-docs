> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/manipulationevents/willrelease

# ManipulationEvents.WillRelease

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

The event that occurs just as someone releases an entity during a manipulation gesture.

## Declaration

```swift
struct WillRelease
```

## Topics

### Instance Properties

- [entity](willrelease/entity.md): The component’s entity.
- [inputDeviceSet](willrelease/inputdeviceset.md): The input devices that ended the interaction.
- [wasCancelled](willrelease/wascancelled.md): Whether the release was caused by a cancelled interaction.

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
- [ManipulationEvents.WillEnd](willend.md): The event that occurs at the end of a manipulation gesture, when the entity has reached its resting position, destination and the system no longer updates it.
