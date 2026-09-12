> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyboardshortcut/init(_:modifiers:)](https://developer.apple.com/documentation/swiftui/keyboardshortcut/init(_:modifiers:))

# init(\_:modifiers:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new keyboard shortcut with the given key equivalent and set of modifier keys.

## Declaration

```swift
init(_ key: KeyEquivalent, modifiers: EventModifiers = .command)
```

<a id="discussion"></a>

## Discussion

The localization configuration defaults to [automatic](localization-swift.struct/automatic.md).

## See Also

### Creating a shortcut

- [key](key.md): The key equivalent that the user presses in conjunction with any specified modifier keys to activate the shortcut.
- [modifiers](modifiers.md): The modifier keys that the user presses in conjunction with a key equivalent to activate the shortcut.
