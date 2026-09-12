> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/keyboardshortcut](https://developer.apple.com/documentation/swiftui/environmentvalues/keyboardshortcut)

# keyboardShortcut

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The keyboard shortcut that buttons in this environment will be triggered with.

## Declaration

```swift
var keyboardShortcut: KeyboardShortcut? { get }
```

<a id="discussion"></a>

## Discussion

This is particularly useful in button styles when a button’s appearance depends on the shortcut associated with it. On macOS, for example, when a button is bound to the Return key, it is typically drawn with a special emphasis. This happens automatically when using the built-in button styles, and can be implemented manually in custom styles using this environment key:

```swift
private struct MyButtonStyle: ButtonStyle {
    @Environment(\.keyboardShortcut)
    private var shortcut: KeyboardShortcut?

    func makeBody(configuration: Configuration) -> some View {
        let labelFont = Font.body
            .weight(shortcut == .defaultAction ? .bold : .regular)
        configuration.label
            .font(labelFont)
    }
}
```

If no keyboard shortcut has been applied to the view or its ancestor, then the environment value will be `nil`.

## See Also

### Creating keyboard shortcuts

- [keyboardShortcut(\_:)](../view/keyboardshortcut%28__%29.md): Assigns a keyboard shortcut to the modified control.
- [keyboardShortcut(\_:modifiers:)](../view/keyboardshortcut%28__modifiers_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut(\_:modifiers:localization:)](../view/keyboardshortcut%28__modifiers_localization_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [KeyboardShortcut](../keyboardshortcut.md): Keyboard shortcuts describe combinations of keys on a keyboard that the user can press in order to activate a button or toggle.
- [KeyEquivalent](../keyequivalent.md): Key equivalents consist of a letter, punctuation, or function key that can be combined with an optional set of modifier keys to specify a keyboard shortcut.
- [EventModifiers](../eventmodifiers.md): A set of key modifiers that you can add to a gesture.
