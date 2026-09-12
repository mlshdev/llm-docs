> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/componentevents/willdeactivate](https://developer.apple.com/documentation/realitykit/componentevents/willdeactivate)

# ComponentEvents.WillDeactivate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Event raised before a component is deactivated.

## Declaration

```swift
struct WillDeactivate
```

## Topics

### Instance Properties

- [componentType](willdeactivate/componenttype.md): The component type.
- [entity](willdeactivate/entity.md): The component’s entity.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting component activations

- [ComponentEvents.DidActivate](didactivate.md): Event raised after a component has been activated.
