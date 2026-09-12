> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/keyequivalent](https://developer.apple.com/documentation/appkit/nsmenuitem/keyequivalent)

# keyEquivalent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item’s unmodified key equivalent.

## Declaration

```swift
var keyEquivalent: String { get set }
```

<a id="Discussion"></a>

## Discussion

If you want to specify the Backspace key as the key equivalent for a menu item, use a single character string with [NSBackspaceCharacter](../nsbackspacecharacter.md) (defined in `NSText.h` as `0x08`) and for the Forward Delete key, use [NSDeleteCharacter](../nsdeletecharacter.md) (defined in `NSText.h` as `0x7F`). Note that these are not the same characters you get from an [NSEvent](../nsevent.md) key-down event when pressing those keys.

## See Also

### Related Documentation

- [userKeyEquivalent](userkeyequivalent.md): The user-assigned key equivalent for the menu item.

### Managing key equivalents

- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The menu item’s keyboard equivalent modifiers.

# keyEquivalent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item’s unmodified key equivalent.

## Declaration

```objectivec
@property (copy) NSString * keyEquivalent;
```

<a id="Discussion"></a>

## Discussion

If you want to specify the Backspace key as the key equivalent for a menu item, use a single character string with [NSBackspaceCharacter](../nsbackspacecharacter.md) (defined in `NSText.h` as `0x08`) and for the Forward Delete key, use [NSDeleteCharacter](../nsdeletecharacter.md) (defined in `NSText.h` as `0x7F`). Note that these are not the same characters you get from an [NSEvent](../nsevent.md) key-down event when pressing those keys.

## See Also

### Related Documentation

- [userKeyEquivalent](userkeyequivalent.md): The user-assigned key equivalent for the menu item.
- [mnemonic](mnemonic.md): Deprecated. Returns the character in the menu item title that appears underlined for use as a mnemonic.
- [setMnemonicLocation:](setmnemoniclocation_.md): Deprecated. Sets the character of the menu item title at location that is to be underlined.

### Managing key equivalents

- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The menu item’s keyboard equivalent modifiers.
