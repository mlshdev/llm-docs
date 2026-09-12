> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/changefont(_:)](https://developer.apple.com/documentation/appkit/nstext/changefont(_:))

# changeFont(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method changes the font of the selection for a rich text object, or of all text for a plain text object.

## Declaration

```swift
func changeFont(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

If the receiver doesn’t use the Font panel, this method does nothing.

This method changes the font by sending a [convert(\_:)](../nsfontmanager/convert%28__%29.md) message to the shared NSFontManager and applying each NSFont returned to the appropriate text. See the [NSFontManager](../nsfontmanager.md) class specification for more information on font conversion.

## See Also

### Related Documentation

- [usesFontPanel](usesfontpanel.md): A Boolean that controls whether the receiver uses the Font panel and Font menu.

### Changing the font

- [font](font.md): The font of all the receiver’s text.
- [setFont(\_:range:)](setfont%28__range_%29.md): Sets the font of characters within `aRange` to `aFont`.

# changeFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

This action method changes the font of the selection for a rich text object, or of all text for a plain text object.

## Declaration

```objectivec
- (void) changeFont:(id) sender;
```

<a id="Discussion"></a>

## Discussion

If the receiver doesn’t use the Font panel, this method does nothing.

This method changes the font by sending a [convertFont:](../nsfontmanager/convert%28__%29.md) message to the shared NSFontManager and applying each NSFont returned to the appropriate text. See the [NSFontManager](../nsfontmanager.md) class specification for more information on font conversion.

## See Also

### Related Documentation

- [usesFontPanel](usesfontpanel.md): A Boolean that controls whether the receiver uses the Font panel and Font menu.

### Changing the font

- [font](font.md): The font of all the receiver’s text.
- [setFont:range:](setfont%28__range_%29.md): Sets the font of characters within `aRange` to `aFont`.
