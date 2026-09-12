> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolldismisseskeyboardmode](https://developer.apple.com/documentation/swiftui/scrolldismisseskeyboardmode)

# ScrollDismissesKeyboardMode

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · watchOS 9.0+

The ways that scrollable content can interact with the software keyboard.

## Declaration

```swift
struct ScrollDismissesKeyboardMode
```

<a id="overview"></a>

## Overview

Use this type in a call to the [scrollDismissesKeyboard(\_:)](view/scrolldismisseskeyboard%28__%29.md) modifier to specify the dismissal behavior of scrollable views.

## Topics

### Getting modes

- [automatic](scrolldismisseskeyboardmode/automatic.md): Determine the mode automatically based on the surrounding context.
- [immediately](scrolldismisseskeyboardmode/immediately.md): Dismiss the keyboard as soon as scrolling starts.
- [interactively](scrolldismisseskeyboardmode/interactively.md): Enable people to interactively dismiss the keyboard as part of the scroll operation.
- [never](scrolldismisseskeyboardmode/never.md): Never dismiss the keyboard automatically as a result of scrolling.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interacting with a software keyboard

- [scrollDismissesKeyboard(\_:)](view/scrolldismisseskeyboard%28__%29.md): Configures the behavior in which scrollable content interacts with the software keyboard.
- [scrollDismissesKeyboardMode](environmentvalues/scrolldismisseskeyboardmode.md): The way that scrollable content interacts with the software keyboard.
