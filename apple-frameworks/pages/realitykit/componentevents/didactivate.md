> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/componentevents/didactivate](https://developer.apple.com/documentation/realitykit/componentevents/didactivate)

# ComponentEvents.DidActivate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Event raised after a component has been activated.

## Declaration

```swift
struct DidActivate
```

## Topics

### Instance Properties

- [componentType](didactivate/componenttype.md): The component type.
- [entity](didactivate/entity.md): The component’s entity.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting component activations

- [ComponentEvents.WillDeactivate](willdeactivate.md): Event raised before a component is deactivated.
