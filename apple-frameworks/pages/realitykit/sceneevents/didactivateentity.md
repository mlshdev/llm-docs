> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sceneevents/didactivateentity](https://developer.apple.com/documentation/realitykit/sceneevents/didactivateentity)

# SceneEvents.DidActivateEntity

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Raised after an entity becomes active.

## Declaration

```swift
struct DidActivateEntity
```

## Topics

### Instance Properties

- [entity](didactivateentity/entity.md)

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting scene hierarchy changes

- [SceneEvents.DidAddEntity](didaddentity.md): Raised after an entity is added to the scene.
- [SceneEvents.DidReparentEntity](didreparententity.md): Raised after an entity has been reparented within the same scene.
- [SceneEvents.WillRemoveEntity](willremoveentity.md): Raised before an entity is removed from the scene.
- [SceneEvents.WillDeactivateEntity](willdeactivateentity.md): Raised before an entity becomes inactive.
