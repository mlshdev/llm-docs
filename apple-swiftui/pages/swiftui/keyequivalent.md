> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyequivalent](https://developer.apple.com/documentation/swiftui/keyequivalent)

# KeyEquivalent

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

Key equivalents consist of a letter, punctuation, or function key that can be combined with an optional set of modifier keys to specify a keyboard shortcut.

## Declaration

```swift
struct KeyEquivalent
```

<a id="overview"></a>

## Overview

Key equivalents are used to establish keyboard shortcuts to app functionality. Any key can be used as a key equivalent as long as pressing it produces a single character value. Key equivalents are typically initialized using a single-character string literal, with constants for unprintable or hard-to-type values.

The modifier keys necessary to type a key equivalent are factored in to the resulting keyboard shortcut. That is, a key equivalent whose raw value is the capitalized string “A” corresponds with the keyboard shortcut Command-Shift-A. The exact mapping may depend on the keyboard layout—for example, a key equivalent with the character value “}” produces a shortcut equivalent to Command-Shift-\] on ANSI keyboards, but would produce a different shortcut for keyboard layouts where punctuation characters are in different locations.

## Topics

### Getting arrow keys

- [upArrow](keyequivalent/uparrow.md): Up Arrow (U+F700)
- [downArrow](keyequivalent/downarrow.md): Down Arrow (U+F701)
- [leftArrow](keyequivalent/leftarrow.md): Left Arrow (U+F702)
- [rightArrow](keyequivalent/rightarrow.md): Right Arrow (U+F703)

### Getting other special keys

- [clear](keyequivalent/clear.md): Clear (U+F739)
- [delete](keyequivalent/delete.md): Delete (U+0008)
- [deleteForward](keyequivalent/deleteforward.md): Delete Forward (U+F728)
- [end](keyequivalent/end.md): End (U+F72B)
- [escape](keyequivalent/escape.md): Escape (U+001B)
- [home](keyequivalent/home.md): Home (U+F729)
- [pageDown](keyequivalent/pagedown.md): Page Down (U+F72D)
- [pageUp](keyequivalent/pageup.md): Page Up (U+F72C)
- [return](keyequivalent/return.md): Return (U+000D)
- [space](keyequivalent/space.md): Space (U+0020)
- [tab](keyequivalent/tab.md): Tab (U+0009)

### Creating a key equivalent

- [init(\_:)](keyequivalent/init%28__%29.md): Creates a new key equivalent from the given character value.
- [character](keyequivalent/character.md): The character value that the key equivalent represents.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating keyboard shortcuts

- [keyboardShortcut(\_:)](view/keyboardshortcut%28__%29.md): Assigns a keyboard shortcut to the modified control.
- [keyboardShortcut(\_:modifiers:)](view/keyboardshortcut%28__modifiers_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut(\_:modifiers:localization:)](view/keyboardshortcut%28__modifiers_localization_%29.md): Defines a keyboard shortcut and assigns it to the modified control.
- [keyboardShortcut](environmentvalues/keyboardshortcut.md): The keyboard shortcut that buttons in this environment will be triggered with.
- [KeyboardShortcut](keyboardshortcut.md): Keyboard shortcuts describe combinations of keys on a keyboard that the user can press in order to activate a button or toggle.
- [EventModifiers](eventmodifiers.md): A set of key modifiers that you can add to a gesture.
