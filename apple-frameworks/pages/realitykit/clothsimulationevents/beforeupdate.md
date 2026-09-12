> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationevents/beforeupdate](https://developer.apple.com/documentation/realitykit/clothsimulationevents/beforeupdate)

# ClothSimulationEvents.BeforeUpdate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An event type that a cloth simulation publishes immediately before performing an update.

## Declaration

```swift
struct BeforeUpdate
```

## Topics

### Inspecting the update

- [simulationEntity](beforeupdate/simulationentity.md): The entity that has the simulation component that this event originates from.
- [updateCount](beforeupdate/updatecount.md): The total number of updates in the simulation including the next update that immediately follows this event.

### Instance Properties

- [deltaTime](beforeupdate/deltatime.md): The duration of the simulation update, in seconds, that this event represents.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Observing simulation events

- [ClothSimulationEvents.Start](start.md): An event type that a cloth simulation publishes immediately after it starts.
- [ClothSimulationEvents.AfterUpdate](afterupdate.md): An event type that a cloth simulation publishes immediately after performing an update.
