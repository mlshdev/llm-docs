> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/keyequivalentmodifiermask](https://developer.apple.com/documentation/appkit/nsbuttoncell/keyequivalentmodifiermask)

# keyEquivalentModifierMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The mask that identifies the modifier keys for the button’s key equivalent.

## Declaration

```swift
var keyEquivalentModifierMask: NSEvent.ModifierFlags { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a mask that indicates the modifier keys that are applied to the button’s key equivalent. Mask bits are defined in `NSEvent.h`. The only mask bits that are relevant in button key-equivalent modifier masks are `NSControlKeyMask`, `NSAlternateKeyMask`, and `NSCommandKeyMask` bits.

## See Also

### Managing the Key Equivalent

- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentFont](keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [setKeyEquivalentFont(\_:size:)](setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.

# keyEquivalentModifierMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The mask that identifies the modifier keys for the button’s key equivalent.

## Declaration

```objectivec
@property NSEventModifierFlags keyEquivalentModifierMask;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a mask that indicates the modifier keys that are applied to the button’s key equivalent. Mask bits are defined in `NSEvent.h`. The only mask bits that are relevant in button key-equivalent modifier masks are `NSControlKeyMask`, `NSAlternateKeyMask`, and `NSCommandKeyMask` bits.

## See Also

### Managing the Key Equivalent

- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentFont](keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [setKeyEquivalentFont:size:](setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.
