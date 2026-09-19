> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsbutton/keyequivalentmodifiermask

# keyEquivalentModifierMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The mask specifying the modifier keys for the button’s key equivalent.

## Declaration

```swift
var keyEquivalentModifierMask: NSEvent.ModifierFlags { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the mask specifying the modifier keys that are applied to the button’s key equivalent. Mask bits are defined in Modifier Flags. The only mask bits relevant in button key-equivalent modifier masks are `NSControlKeyMask`, `NSAlternateKeyMask`, and `NSCommandKeyMask`.

## See Also

### Accessing key equivalents

- [keyEquivalent](keyequivalent.md): The key-equivalent character of the button.

# keyEquivalentModifierMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The mask specifying the modifier keys for the button’s key equivalent.

## Declaration

```objectivec
@property NSEventModifierFlags keyEquivalentModifierMask;
```

<a id="Discussion"></a>

## Discussion

This property contains the mask specifying the modifier keys that are applied to the button’s key equivalent. Mask bits are defined in Modifier Flags. The only mask bits relevant in button key-equivalent modifier masks are `NSControlKeyMask`, `NSAlternateKeyMask`, and `NSCommandKeyMask`.

## See Also

### Accessing key equivalents

- [keyEquivalent](keyequivalent.md): The key-equivalent character of the button.
