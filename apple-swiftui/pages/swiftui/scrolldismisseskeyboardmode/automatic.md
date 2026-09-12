> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolldismisseskeyboardmode/automatic](https://developer.apple.com/documentation/swiftui/scrolldismisseskeyboardmode/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · watchOS 9.0+

Determine the mode automatically based on the surrounding context.

## Declaration

```swift
static var automatic: ScrollDismissesKeyboardMode { get }
```

<a id="discussion"></a>

## Discussion

By default, a [TextEditor](../texteditor.md) is interactive while a [List](../list.md) of scrollable content always dismiss the keyboard on a scroll, when linked against iOS 16 or later.

## See Also

### Getting modes

- [immediately](immediately.md): Dismiss the keyboard as soon as scrolling starts.
- [interactively](interactively.md): Enable people to interactively dismiss the keyboard as part of the scroll operation.
- [never](never.md): Never dismiss the keyboard automatically as a result of scrolling.
