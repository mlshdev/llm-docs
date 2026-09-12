> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/defaultfocusevaluationpriority](https://developer.apple.com/documentation/swiftui/defaultfocusevaluationpriority)

# DefaultFocusEvaluationPriority

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Prioritizations for default focus preferences when evaluating where to move focus in different circumstances.

## Declaration

```swift
struct DefaultFocusEvaluationPriority
```

## Topics

### Getting the priorities

- [automatic](defaultfocusevaluationpriority/automatic.md): Use the default focus preference when focus moves into the affected branch automatically, but ignore it when the movement is driven by a user-initiated navigation command.
- [userInitiated](defaultfocusevaluationpriority/userinitiated.md): Always use the default focus preference when focus moves into the affected branch.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling default focus

- [prefersDefaultFocus(\_:in:)](view/prefersdefaultfocus%28__in_%29.md): Indicates that the view should receive focus by default for a given namespace.
- [defaultFocus(\_:\_:priority:)](view/defaultfocus%28____priority_%29.md): Defines a region of the window in which default focus is evaluated by assigning a value to a given focus state binding.
