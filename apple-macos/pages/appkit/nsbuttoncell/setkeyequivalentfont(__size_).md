> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/setkeyequivalentfont(_:size:)](https://developer.apple.com/documentation/appkit/nsbuttoncell/setkeyequivalentfont(_:size:))

# setKeyEquivalentFont(\_:size:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Sets by name and size of the font used to draw the key equivalent.

> The keyEquivalentFont property is no longer used. Setting it has no effect.

## Declaration

```swift
func setKeyEquivalentFont(_ fontName: String, size fontSize: CGFloat)
```

## Parameters

- `fontName`: The name of the font to use to draw the key equivalent.
- `fontSize`: The font size to use to draw the key equivalent.

<a id="Discussion"></a>

## Discussion

This method redisplays the button if necessary. It does nothing if the button doesn’t have a key equivalent associated with it. The default font is the same as that used to draw the title.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.

### Managing the Key Equivalent

- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentFont](keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.

# setKeyEquivalentFont:size: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.15)

Sets by name and size of the font used to draw the key equivalent.

> The keyEquivalentFont property is no longer used. Setting it has no effect.

## Declaration

```objectivec
- (void) setKeyEquivalentFont:(NSString *) fontName size:(CGFloat) fontSize;
```

## Parameters

- `fontName`: The name of the font to use to draw the key equivalent.
- `fontSize`: The font size to use to draw the key equivalent.

<a id="Discussion"></a>

## Discussion

This method redisplays the button if necessary. It does nothing if the button doesn’t have a key equivalent associated with it. The default font is the same as that used to draw the title.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.

### Managing the Key Equivalent

- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [keyEquivalentFont](keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.
