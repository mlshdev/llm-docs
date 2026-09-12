> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationevents/start](https://developer.apple.com/documentation/realitykit/clothsimulationevents/start)

# ClothSimulationEvents.Start

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An event type that a cloth simulation publishes immediately after it starts.

## Declaration

```swift
struct Start
```

<a id="overview"></a>

## Overview

A simulation starts once before entering its update loop, at which point it regularly updates.

## Topics

### Accessing the simulation entity

- [simulationEntity](start/simulationentity.md): The entity that has the simulation component that this event originates from.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing simulation events

- [ClothSimulationEvents.BeforeUpdate](beforeupdate.md): An event type that a cloth simulation publishes immediately before performing an update.
- [ClothSimulationEvents.AfterUpdate](afterupdate.md): An event type that a cloth simulation publishes immediately after performing an update.
