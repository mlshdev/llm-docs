> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/boundsrect(forcontentrect:in:textcontainer:characterrange:)](https://developer.apple.com/documentation/appkit/nstextblock/boundsrect(forcontentrect:in:textcontainer:characterrange:))

# boundsRect(forContentRect:in:textContainer:characterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle the text in the block actually occupies, including padding, borders, and margins.

## Declaration

```swift
func boundsRect(forContentRect contentRect: NSRect, in rect: NSRect, textContainer: NSTextContainer, characterRange charRange: NSRange) -> NSRect
```

## Parameters

- `contentRect`: The actual rectangle in which the text was laid out, as determined by [rectForLayout(at:in:textContainer:characterRange:)](rectforlayout%28at_in_textcontainer_characterrange_%29.md).
- `rect`: The initial rectangle in `textContainer` proposed by the typesetter.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters in the [NSTextStorage](../nstextstorage.md) object whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle the text in the block actually occupies, including padding, borders, and margins.

<a id="Discussion"></a>

## Discussion

This methods is called by the typesetter after the text block is laid out to return the rectangle the text in the block actually occupies, including padding, borders, and margins.

## See Also

### Determining size and position of a text block

- [rectForLayout(at:in:textContainer:characterRange:)](rectforlayout%28at_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for the specified arguments.

# boundsRectForContentRect:inRect:textContainer:characterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle the text in the block actually occupies, including padding, borders, and margins.

## Declaration

```objectivec
- (NSRect) boundsRectForContentRect:(NSRect) contentRect inRect:(NSRect) rect textContainer:(NSTextContainer *) textContainer characterRange:(NSRange) charRange;
```

## Parameters

- `contentRect`: The actual rectangle in which the text was laid out, as determined by [rectForLayoutAtPoint:inRect:textContainer:characterRange:](rectforlayout%28at_in_textcontainer_characterrange_%29.md).
- `rect`: The initial rectangle in `textContainer` proposed by the typesetter.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters in the [NSTextStorage](../nstextstorage.md) object whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle the text in the block actually occupies, including padding, borders, and margins.

<a id="Discussion"></a>

## Discussion

This methods is called by the typesetter after the text block is laid out to return the rectangle the text in the block actually occupies, including padding, borders, and margins.

## See Also

### Determining size and position of a text block

- [rectForLayoutAtPoint:inRect:textContainer:characterRange:](rectforlayout%28at_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for the specified arguments.
