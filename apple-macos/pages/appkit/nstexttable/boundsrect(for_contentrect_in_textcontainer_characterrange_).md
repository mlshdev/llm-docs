> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttable/boundsrect(for:contentrect:in:textcontainer:characterrange:)](https://developer.apple.com/documentation/appkit/nstexttable/boundsrect(for:contentrect:in:textcontainer:characterrange:))

# boundsRect(for:contentRect:in:textContainer:characterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle the text table block actually occupies, including padding, borders, and margins.

## Declaration

```swift
func boundsRect(for block: NSTextTableBlock, contentRect: NSRect, in rect: NSRect, textContainer: NSTextContainer, characterRange charRange: NSRange) -> NSRect
```

## Parameters

- `block`: The text table block that wants to determine where to layout its glyphs.
- `contentRect`: The actual rectangle in which the text was laid out, as determined by [rectForLayout(at:in:textContainer:characterRange:)](../nstextblock/rectforlayout%28at_in_textcontainer_characterrange_%29.md).
- `rect`: The initial rectangle in `textContainer` proposed by the typesetter.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle the text table block actually occupies, including padding, borders, and margins.

<a id="Discussion"></a>

## Discussion

This method is called by the text table block `block` after it is laid out to determine the rectangle the text table block actually occupies, including padding, borders, and margins.

## See Also

### Determining layout rectangles

- [rect(for:layoutAt:in:textContainer:characterRange:)](rect%28for_layoutat_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for a text table block.

# boundsRectForBlock:contentRect:inRect:textContainer:characterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle the text table block actually occupies, including padding, borders, and margins.

## Declaration

```objectivec
- (NSRect) boundsRectForBlock:(NSTextTableBlock *) block contentRect:(NSRect) contentRect inRect:(NSRect) rect textContainer:(NSTextContainer *) textContainer characterRange:(NSRange) charRange;
```

## Parameters

- `block`: The text table block that wants to determine where to layout its glyphs.
- `contentRect`: The actual rectangle in which the text was laid out, as determined by [rectForLayoutAtPoint:inRect:textContainer:characterRange:](../nstextblock/rectforlayout%28at_in_textcontainer_characterrange_%29.md).
- `rect`: The initial rectangle in `textContainer` proposed by the typesetter.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle the text table block actually occupies, including padding, borders, and margins.

<a id="Discussion"></a>

## Discussion

This method is called by the text table block `block` after it is laid out to determine the rectangle the text table block actually occupies, including padding, borders, and margins.

## See Also

### Determining layout rectangles

- [rectForBlock:layoutAtPoint:inRect:textContainer:characterRange:](rect%28for_layoutat_in_textcontainer_characterrange_%29.md): Returns the rectangle within which glyphs should be laid out for a text table block.
