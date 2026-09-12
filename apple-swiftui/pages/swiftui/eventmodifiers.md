> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/eventmodifiers](https://developer.apple.com/documentation/swiftui/eventmodifiers)

# EventModifiers

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A set of key modifiers that you can add to a gesture.

## Declaration

```swift
@frozen struct EventModifiers
```

## Topics

### Getting modifier keys

- [all](eventmodifiers/all.md): All possible modifier keys.
- [capsLock](eventmodifiers/capslock.md): The Caps Lock key.
- [command](eventmodifiers/command.md): The Command key.
- [control](eventmodifiers/control.md): The Control key.
- [numericPad](eventmodifiers/numericpad.md): Any key on the numeric keypad.
- [option](eventmodifiers/option.md): The Option key.
- [shift](eventmodifiers/shift.md): The Shift key.

### Creating a set of options

- [init(rawValue:)](eventmodifiers/init%28rawvalue_%29.md): Creates a new set from a raw value.
- [rawValue](eventmodifiers/rawvalue.md): The raw value.

### Deprecated modifiers

- [function](eventmodifiers/function.md): Deprecated. The Function key.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating keyboard shortcuts

- [keyboardShortcut(\_:)](view/keyboardshortcut%28__%29.md): Assigns a keyboard shortcut to the modified control.
- [keyboardShortcut(\_:modifiers:)](view/keyboardshortcut%28__modifiers_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut(\_:modifiers:localization:)](view/keyboardshortcut%28__modifiers_localization_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut](environmentvalues/keyboardshortcut.md): The keyboard shortcut that buttons in this environment will be triggered with.
- [KeyboardShortcut](keyboardshortcut.md): Keyboard shortcuts describe combinations of keys on a keyboard that the user can press in order to activate a button or toggle.
- [KeyEquivalent](keyequivalent.md): Key equivalents consist of a letter, punctuation, or function key that can be combined with an optional set of modifier keys to specify a keyboard shortcut.
