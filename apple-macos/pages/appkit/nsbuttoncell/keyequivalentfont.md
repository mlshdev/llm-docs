> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/keyequivalentfont](https://developer.apple.com/documentation/appkit/nsbuttoncell/keyequivalentfont)

# keyEquivalentFont (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.15)

The font used to draw the button’s key equivalent.

> The keyEquivalentFont property is no longer used. It always returns the NSButtonCell's font, and setting it has no effect.

## Declaration

```swift
var keyEquivalentFont: NSFont? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the font object that describes the font used to draw the button’s key equivalent. If the property value is `nil`, the button doesn’t have a key equivalent. Setting this property redraws the button if necessary. Setting this property on a button that has no key equivalent does nothing.

Note that the default font is the same as the font used to draw the title.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.

### Managing the Key Equivalent

- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.
- [setKeyEquivalentFont(\_:size:)](setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.

# keyEquivalentFont (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.15)

The font used to draw the button’s key equivalent.

> The keyEquivalentFont property is no longer used. It always returns the NSButtonCell's font, and setting it has no effect.

## Declaration

```objectivec
@property (strong, nullable) NSFont * keyEquivalentFont;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the font object that describes the font used to draw the button’s key equivalent. If the property value is `nil`, the button doesn’t have a key equivalent. Setting this property redraws the button if necessary. Setting this property on a button that has no key equivalent does nothing.

Note that the default font is the same as the font used to draw the title.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.

### Managing the Key Equivalent

- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.
- [setKeyEquivalentFont:size:](setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.
