> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/environmentvalues/scrolldismisseskeyboardmode

# scrollDismissesKeyboardMode

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · watchOS 9.0+

The way that scrollable content interacts with the software keyboard.

## Declaration

```swift
var scrollDismissesKeyboardMode: ScrollDismissesKeyboardMode { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [automatic](../scrolldismisseskeyboardmode/automatic.md). Use the [scrollDismissesKeyboard(\_:)](../view/scrolldismisseskeyboard%28__%29.md) modifier to configure this property.

## See Also

### Interacting with a software keyboard

- [scrollDismissesKeyboard(\_:)](../view/scrolldismisseskeyboard%28__%29.md): Configures the behavior in which scrollable content interacts with the software keyboard.
- [ScrollDismissesKeyboardMode](../scrolldismisseskeyboardmode.md): The ways that scrollable content can interact with the software keyboard.
