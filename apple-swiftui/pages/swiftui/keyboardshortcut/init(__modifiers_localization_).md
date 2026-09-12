> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyboardshortcut/init(_:modifiers:localization:)](https://developer.apple.com/documentation/swiftui/keyboardshortcut/init(_:modifiers:localization:))

# init(\_:modifiers:localization:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a new keyboard shortcut with the given key equivalent and set of modifier keys.

## Declaration

```swift
init(_ key: KeyEquivalent, modifiers: EventModifiers = .command, localization: KeyboardShortcut.Localization)
```

<a id="discussion"></a>

## Discussion

Use the `localization` parameter to specify a localization strategy for this shortcut.

## See Also

### Creating a localized shortcut

- [localization](localization-swift.property.md): The localization strategy to apply to this shortcut.
- [KeyboardShortcut.Localization](localization-swift.struct.md): Options for how a keyboard shortcut participates in automatic localization.
