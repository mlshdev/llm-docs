> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/scrolldismisseskeyboard(_:)](https://developer.apple.com/documentation/swiftui/view/scrolldismisseskeyboard(_:))

# scrollDismissesKeyboard(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · watchOS 9.0+

Configures the behavior in which scrollable content interacts with the software keyboard.

## Declaration

```swift
nonisolated func scrollDismissesKeyboard(_ mode: ScrollDismissesKeyboardMode) -> some View

```

## Parameters

- `mode`: The keyboard dismissal mode that scrollable content uses.

<a id="return-value"></a>

## Return Value

A view that uses the specified keyboard dismissal mode.

<a id="discussion"></a>

## Discussion

You use this modifier to customize how scrollable content interacts with the software keyboard. For example, you can specify a value of [immediately](../scrolldismisseskeyboardmode/immediately.md) to indicate that you would like scrollable content to immediately dismiss the keyboard if present when a scroll drag gesture begins.

```swift
@State private var text = ""

ScrollView {
    TextField("Prompt", text: $text)
    ForEach(0 ..< 50) { index in
        Text("\(index)")
            .padding()
    }
}
.scrollDismissesKeyboard(.immediately)
```

You can also use this modifier to customize the keyboard dismissal behavior for other kinds of scrollable views, like a [List](../list.md) or a [TextEditor](../texteditor.md).

By default, a [TextEditor](../texteditor.md) is interactive while other kinds of scrollable content always dismiss the keyboard on a scroll when linked against iOS 16 or later. Pass a value of [never](../scrolldismisseskeyboardmode/never.md) to indicate that scrollable content should never automatically dismiss the keyboard.

## See Also

### Interacting with a software keyboard

- [scrollDismissesKeyboardMode](../environmentvalues/scrolldismisseskeyboardmode.md): The way that scrollable content interacts with the software keyboard.
- [ScrollDismissesKeyboardMode](../scrolldismisseskeyboardmode.md): The ways that scrollable content can interact with the software keyboard.
