> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyboardshortcut](https://developer.apple.com/documentation/swiftui/keyboardshortcut)

# KeyboardShortcut

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Keyboard shortcuts describe combinations of keys on a keyboard that the user can press in order to activate a button or toggle.

## Declaration

```swift
struct KeyboardShortcut
```

## Topics

### Getting standard shortcuts

- [cancelAction](keyboardshortcut/cancelaction.md): The standard keyboard shortcut for cancelling the in-progress action or dismissing a prompt, consisting of the Escape (⎋) key and no modifiers.
- [defaultAction](keyboardshortcut/defaultaction.md): The standard keyboard shortcut for the default button, consisting of the Return (↩) key and no modifiers.

### Creating a shortcut

- [init(\_:modifiers:)](keyboardshortcut/init%28__modifiers_%29.md): Creates a new keyboard shortcut with the given key equivalent and set of modifier keys.
- [key](keyboardshortcut/key.md): The key equivalent that the user presses in conjunction with any specified modifier keys to activate the shortcut.
- [modifiers](keyboardshortcut/modifiers.md): The modifier keys that the user presses in conjunction with a key equivalent to activate the shortcut.

### Creating a localized shortcut

- [init(\_:modifiers:localization:)](keyboardshortcut/init%28__modifiers_localization_%29.md): Creates a new keyboard shortcut with the given key equivalent and set of modifier keys.
- [localization](keyboardshortcut/localization-swift.property.md): The localization strategy to apply to this shortcut.
- [KeyboardShortcut.Localization](keyboardshortcut/localization-swift.struct.md): Options for how a keyboard shortcut participates in automatic localization.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating keyboard shortcuts

- [keyboardShortcut(\_:)](view/keyboardshortcut%28__%29.md): Assigns a keyboard shortcut to the modified control.
- [keyboardShortcut(\_:modifiers:)](view/keyboardshortcut%28__modifiers_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut(\_:modifiers:localization:)](view/keyboardshortcut%28__modifiers_localization_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut](environmentvalues/keyboardshortcut.md): The keyboard shortcut that buttons in this environment will be triggered with.
- [KeyEquivalent](keyequivalent.md): Key equivalents consist of a letter, punctuation, or function key that can be combined with an optional set of modifier keys to specify a keyboard shortcut.
- [EventModifiers](eventmodifiers.md): A set of key modifiers that you can add to a gesture.
