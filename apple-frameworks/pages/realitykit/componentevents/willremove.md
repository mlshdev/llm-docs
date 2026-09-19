> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/componentevents/willremove

# ComponentEvents.WillRemove

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Event raised before a component is removed from an entity.

## Declaration

```swift
struct WillRemove
```

## Topics

### Instance Properties

- [componentType](willremove/componenttype.md): The component type.
- [entity](willremove/entity.md): The component’s entity.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting component changes

- [ComponentEvents.DidAdd](didadd.md): Event raised after a component has been added to an entity,
- [ComponentEvents.DidChange](didchange.md): Event raised after a component has been modified.
