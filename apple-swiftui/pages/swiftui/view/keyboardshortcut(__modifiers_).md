> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/keyboardshortcut(_:modifiers:)](https://developer.apple.com/documentation/swiftui/view/keyboardshortcut(_:modifiers:))

# keyboardShortcut(\_:modifiers:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Defines a keyboard shortcut and assigns it to the modified control.

## Declaration

```swift
nonisolated func keyboardShortcut(_ key: KeyEquivalent, modifiers: EventModifiers = .command) -> some View

```

<a id="discussion"></a>

## Discussion

Pressing the control’s shortcut while the control is anywhere in the frontmost window or scene, or anywhere in the macOS main menu, is equivalent to direct interaction with the control to perform its primary action.

The target of a keyboard shortcut is resolved in a leading-to-trailing, depth-first traversal of one or more view hierarchies. On macOS, the system looks in the key window first, then the main window, and then the command groups; on other platforms, the system looks in the active scene, and then the command groups.

If multiple controls are associated with the same shortcut, the first one found is used.

The default localization configuration is set to [automatic](../keyboardshortcut/localization-swift.struct/automatic.md).

## See Also

### Creating keyboard shortcuts

- [keyboardShortcut(\_:)](keyboardshortcut%28__%29.md): Assigns a keyboard shortcut to the modified control.
- [keyboardShortcut(\_:modifiers:localization:)](keyboardshortcut%28__modifiers_localization_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut](../environmentvalues/keyboardshortcut.md): The keyboard shortcut that buttons in this environment will be triggered with.
- [KeyboardShortcut](../keyboardshortcut.md): Keyboard shortcuts describe combinations of keys on a keyboard that the user can press in order to activate a button or toggle.
- [KeyEquivalent](../keyequivalent.md): Key equivalents consist of a letter, punctuation, or function key that can be combined with an optional set of modifier keys to specify a keyboard shortcut.
- [EventModifiers](../eventmodifiers.md): A set of key modifiers that you can add to a gesture.
