> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/writingtoolsbehavior](https://developer.apple.com/documentation/swiftui/writingtoolsbehavior)

# WritingToolsBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.4+

The Writing Tools editing experience for text and text input.

## Declaration

```swift
struct WritingToolsBehavior
```

## Topics

### Type Properties

- [automatic](writingtoolsbehavior/automatic.md): An appropriate editing experience will be provided based on context, which may include disabling the writing tools.
- [complete](writingtoolsbehavior/complete.md): The complete inline-editing experience is provided if possible.
- [disabled](writingtoolsbehavior/disabled.md): The writing tools are disabled.
- [limited](writingtoolsbehavior/limited.md): The limited, overlay-panel experience is provided if possible.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Writing Tools behavior

- [writingToolsBehavior(\_:)](view/writingtoolsbehavior%28__%29.md): Specifies the Writing Tools behavior for text and text input in the environment.
- [writingToolsAffordanceVisibility(\_:)](view/writingtoolsaffordancevisibility%28__%29.md): Specifies whether the system should show the Writing Tools affordance for text input views affected by the environment.
