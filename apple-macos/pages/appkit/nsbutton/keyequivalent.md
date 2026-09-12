> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/keyequivalent](https://developer.apple.com/documentation/appkit/nsbutton/keyequivalent)

# keyEquivalent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key-equivalent character of the button.

## Declaration

```swift
var keyEquivalent: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the button’s key equivalent, or the empty string if no equivalent has been defined. Buttons don’t have a default key equivalent.

If you set a key equivalent instead of an image, the button’s interior is redrawn. However, the key equivalent isn’t displayed if the image position is set to `NSNoImage`, `NSImageOnly`, or `NSImageOverlaps`; that is, the button must display both its title and its “image” (which is the key equivalent in this case), and they must not overlap.

To display a key equivalent on a button, set the image and alternate image to `nil`, set the key equivalent, and then set the image position.

## See Also

### Related Documentation

- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.
- [keyEquivalentFont](../nsbuttoncell/keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.

### Accessing key equivalents

- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask specifying the modifier keys for the button’s key equivalent.

# keyEquivalent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The key-equivalent character of the button.

## Declaration

```objectivec
@property (copy) NSString * keyEquivalent;
```

<a id="Discussion"></a>

## Discussion

This property contains the button’s key equivalent, or the empty string if no equivalent has been defined. Buttons don’t have a default key equivalent.

If you set a key equivalent instead of an image, the button’s interior is redrawn. However, the key equivalent isn’t displayed if the image position is set to `NSNoImage`, `NSImageOnly`, or `NSImageOverlaps`; that is, the button must display both its title and its “image” (which is the key equivalent in this case), and they must not overlap.

To display a key equivalent on a button, set the image and alternate image to `nil`, set the key equivalent, and then set the image position.

## See Also

### Related Documentation

- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Checks the button’s key equivalent against the specified event and, if they match, simulates the button being clicked.
- [keyEquivalentFont](../nsbuttoncell/keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.

### Accessing key equivalents

- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask specifying the modifier keys for the button’s key equivalent.
