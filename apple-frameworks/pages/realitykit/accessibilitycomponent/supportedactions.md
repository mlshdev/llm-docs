> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/accessibilitycomponent/supportedactions](https://developer.apple.com/documentation/realitykit/accessibilitycomponent/supportedactions)

# AccessibilityComponent.SupportedActions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS

A custom action that can be invoked on an entity in response to specific user cues.

## Declaration

```swift
struct SupportedActions
```

## Topics

### Type Properties

- [activate](supportedactions/activate.md): Tells the entity to activate itself.
- [decrement](supportedactions/decrement.md): Tells the entity to decrement the value of its content.
- [increment](supportedactions/increment.md): Tells the entity to increment the value of its content.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessibility

- [Improving the Accessibility of RealityKit Apps](../improving-the-accessibility-of-realitykit-apps.md): Incorporate assistive technologies in your augmented reality app.
- [AccessibilityComponent](../accessibilitycomponent.md): A component that stores accessibility information for an entity.
- [AccessibilityComponent.CustomContent](customcontent-swift.struct.md): A CustomContent struct contains the accessibility strings for the labels you apply to your accessibility content.
- [AccessibilityComponent.RotorType](rotortype.md): A context-sensitive event that helps VoiceOver users find the next instance of a related element.
- [AccessibilityEvents](../accessibilityevents.md)
