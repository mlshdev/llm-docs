> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodyevents/newsimulationpositions](https://developer.apple.com/documentation/realitykit/clothbodyevents/newsimulationpositions)

# ClothBodyEvents.NewSimulationPositions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An event type that a cloth body publishes (before simulation update) when its new positions are available.

## Declaration

```swift
struct NewSimulationPositions
```

<a id="overview"></a>

## Overview

This event should be treated as having a non-escapable lifetime. Some of its data is no longer available after its lifetime has ended.

## Topics

### Accessing local space positions

- [withLocalSpacePositions(\_:)](newsimulationpositions/withlocalspacepositions%28__%29.md): Provides access to the new simulation positions of the body’s particles, in local space.

### Accessing simulation space positions

- [withSimulationSpacePositions(\_:)](newsimulationpositions/withsimulationspacepositions%28__%29.md): Provides access to the new simulation positions of the body’s particles, in simulation space.

### Identifying the event source

- [bodyEntity](newsimulationpositions/bodyentity.md): The entity that has the body component that this event originates from.
- [updateCount](newsimulationpositions/updatecount.md): The simulation update that this event originates from.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
