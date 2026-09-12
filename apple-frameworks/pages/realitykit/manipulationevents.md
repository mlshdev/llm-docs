> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/manipulationevents](https://developer.apple.com/documentation/realitykit/manipulationevents)

# ManipulationEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

Events that occur while a person manipulates an entity.

## Declaration

```swift
enum ManipulationEvents
```

<a id="overview"></a>

## Overview

You can subscribe to these events using [subscribe(to:on:\_:)](realityviewcontentprotocol/subscribe%28to_on___%29.md). For example, you can change the color of an entity’s material when the manipulation gesture begins and ends.

```swift
_ = content.subscribe(to: ManipulationEvents.WillBegin.self) { event in
    event.entity.components[ModelComponent.self]?.materials[0] = SimpleMaterial(color: .blue, isMetallic: false)
}
_ = content.subscribe(to: ManipulationEvents.WillEnd.self)  { event in
    event.entity.components[ModelComponent.self]?.materials[0] = SimpleMaterial(color: .red, isMetallic: false)
}
```

## Topics

### Detecting manipulation gesture events

- [ManipulationEvents.WillBegin](manipulationevents/willbegin.md): The event that occurs when someone is about to start an entity manipulation gesture.
- [ManipulationEvents.DidUpdateTransform](manipulationevents/didupdatetransform.md): The event that occurs repeatedly when the entity’s transform updates during a manipulation gesture.
- [ManipulationEvents.DidHandOff](manipulationevents/didhandoff.md): The event that occurs during a manipulation gesture when someone passes an entity from one hand to the other.
- [ManipulationEvents.WillRelease](manipulationevents/willrelease.md): The event that occurs just as someone releases an entity during a manipulation gesture.
- [ManipulationEvents.WillEnd](manipulationevents/willend.md): The event that occurs at the end of a manipulation gesture, when the entity has reached its resting position, destination and the system no longer updates it.

### Type Aliases

- [ManipulationEvents.InputDeviceSet](manipulationevents/inputdeviceset.md)

## See Also

### Input and interaction events

- [AccessibilityEvents](accessibilityevents.md)
