> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicssimulationevents/willsimulate](https://developer.apple.com/documentation/realitykit/physicssimulationevents/willsimulate)

# PhysicsSimulationEvents.WillSimulate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The event raised before the simulation advances to the current frame.

## Declaration

```swift
struct WillSimulate
```

## Topics

### Instance Properties

- [deltaTime](willsimulate/deltatime.md): The time between the last fixed update event and this one.
- [simulationEntity](willsimulate/simulationentity.md): Deprecated. The root simulation entity associated with the simulation that raised the event.
- [simulationRootEntity](willsimulate/simulationrootentity.md): The root simulation entity associated with the simulation that raised the event.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
