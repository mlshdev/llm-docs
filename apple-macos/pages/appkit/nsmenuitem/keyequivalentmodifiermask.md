> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/keyequivalentmodifiermask](https://developer.apple.com/documentation/appkit/nsmenuitem/keyequivalentmodifiermask)

# keyEquivalentModifierMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item’s keyboard equivalent modifiers.

## Declaration

```swift
var keyEquivalentModifierMask: NSEvent.ModifierFlags { get set }
```

<a id="Discussion"></a>

## Discussion

`NSShiftKeyMask` is a valid modifier for any key equivalent in `mask`. This allows you to specify key-equivalents such as Command-Shift-1 that are consistent across all keyboards. However, with a few exceptions (such as the German “ß” character), a lowercase character with `NSShiftKeyMask` is interpreted the same as the uppercase character without that mask. For example, Command-Shift-c and Command-C are considered to be identical key equivalents.

See the [NSEvent](../nsevent.md) class specification for more information about modifier mask values.

## See Also

### Managing key equivalents

- [keyEquivalent](keyequivalent.md): The menu item’s unmodified key equivalent.

# keyEquivalentModifierMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item’s keyboard equivalent modifiers.

## Declaration

```objectivec
@property NSEventModifierFlags keyEquivalentModifierMask;
```

<a id="Discussion"></a>

## Discussion

`NSShiftKeyMask` is a valid modifier for any key equivalent in `mask`. This allows you to specify key-equivalents such as Command-Shift-1 that are consistent across all keyboards. However, with a few exceptions (such as the German “ß” character), a lowercase character with `NSShiftKeyMask` is interpreted the same as the uppercase character without that mask. For example, Command-Shift-c and Command-C are considered to be identical key equivalents.

See the [NSEvent](../nsevent.md) class specification for more information about modifier mask values.

## See Also

### Managing key equivalents

- [keyEquivalent](keyequivalent.md): The menu item’s unmodified key equivalent.
