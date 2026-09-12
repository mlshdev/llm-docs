> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/focusinteractions](https://developer.apple.com/documentation/swiftui/focusinteractions)

# FocusInteractions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Values describe different focus interactions that a view can support.

## Declaration

```swift
struct FocusInteractions
```

## Topics

### Creating the interaction types

- [automatic](focusinteractions/automatic.md): The view supports whatever focus-driven interactions are commonly expected for interactive content on the current platform.
- [activate](focusinteractions/activate.md): The view has a primary action that can be activated via focus gestures.
- [edit](focusinteractions/edit.md): The view captures input from non-spatial sources like a keyboard or Digital Crown.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Indicating that a view can receive focus

- [focusable(\_:)](view/focusable%28__%29.md): Specifies if the view is focusable.
- [focusable(\_:interactions:)](view/focusable%28__interactions_%29.md): Specifies if the view is focusable, and if so, what focus-driven interactions it supports.
