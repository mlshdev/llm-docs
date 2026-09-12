> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/componentevents/didadd](https://developer.apple.com/documentation/realitykit/componentevents/didadd)

# ComponentEvents.DidAdd

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Event raised after a component has been added to an entity,

## Declaration

```swift
struct DidAdd
```

## Topics

### Instance Properties

- [componentType](didadd/componenttype.md): The component type.
- [entity](didadd/entity.md): The component’s entity.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting component changes

- [ComponentEvents.DidChange](didchange.md): Event raised after a component has been modified.
- [ComponentEvents.WillRemove](willremove.md): Event raised before a component is removed from an entity.
