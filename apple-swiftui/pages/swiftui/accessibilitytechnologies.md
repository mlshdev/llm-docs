> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitytechnologies](https://developer.apple.com/documentation/swiftui/accessibilitytechnologies)

# AccessibilityTechnologies

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accessibility technologies available to the system.

## Declaration

```swift
struct AccessibilityTechnologies
```

## Topics

### Getting technology types

- [switchControl](accessibilitytechnologies/switchcontrol.md): The value that represents a Switch Control, allowing the use of the entire system using controller buttons, a breath-controlled switch or similar hardware.
- [voiceOver](accessibilitytechnologies/voiceover.md): The value that represents the VoiceOver screen reader, allowing use of the system without seeing the screen visually.

### Creating a technology type

- [init()](accessibilitytechnologies/init%28%29.md): Creates a new accessibility technologies structure with an empy accessibility technology set.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Supporting types

- [AccessibilityAttachmentModifier](accessibilityattachmentmodifier.md): A view modifier that adds accessibility properties to the view
