> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothcolliderevents

# ClothColliderEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Types of events that a cloth collider publishes during its lifetime.

## Declaration

```swift
enum ClothColliderEvents
```

## Topics

### Detecting collisions

- [ClothColliderEvents.NewBodyCollisions](clothcolliderevents/newbodycollisions.md): An event type that a cloth collider publishes (before simulation update) when cloth bodies collide with it.

## See Also

### Cloth events

- [ClothSimulationEvents](clothsimulationevents.md): Types of events that a cloth simulation publishes during its lifetime.
- [ClothBodyEvents](clothbodyevents.md): Types of events that a cloth body publishes during its lifetime.
- [ClothQueryVolumeEvents](clothqueryvolumeevents.md): Types of events that a cloth query volume publishes during its lifetime.
