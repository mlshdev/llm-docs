> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/systemupdatecondition](https://developer.apple.com/documentation/realitykit/systemupdatecondition)

# SystemUpdateCondition

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A condition which causes a system to update.

## Declaration

```swift
struct SystemUpdateCondition
```

## Topics

### Type Properties

- [rendering](systemupdatecondition/rendering.md): A condition that is active whenever an update for rendering may be needed, usually matching the refresh rate of the display.

## See Also

### System configuration

- [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md): Apply behaviors and physical effects to the objects and characters in a RealityKit scene with the Entity Component System (ECS).
- [Animating entity rotation with a system](animated-rotation-with-a-system.md): Rotate an entity around an axis using a Component and a System.
- [System](system.md): An object that affects multiple entities in every update of a RealityKit scene.
- [SceneUpdateContext](sceneupdatecontext.md): An object that contains information about the scene to update.
