> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttable/rect(for:layoutat:in:textcontainer:characterrange:)](https://developer.apple.com/documentation/appkit/nstexttable/rect(for:layoutat:in:textcontainer:characterrange:))

# rect(for:layoutAt:in:textContainer:characterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle within which glyphs should be laid out for a text table block.

## Declaration

```swift
func rect(for block: NSTextTableBlock, layoutAt startingPoint: NSPoint, in rect: NSRect, textContainer: NSTextContainer, characterRange charRange: NSRange) -> NSRect
```

## Parameters

- `block`: The text table block that wants to determine where to layout its glyphs.
- `startingPoint`: The location, in container coordinates, where layout begins.
- `rect`: The rectangle in which the block is constrained to lie. For top-level blocks, this is the container rectangle of `textContainer`; for nested blocks, this is the layout rectangle of the enclosing block.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle within which glyphs should be laid out.

<a id="Discussion"></a>

## Discussion

This method is called by the text table block `block` to determine the rectangle within which glyphs should be laid out for the text table block.

## See Also

### Determining layout rectangles

- [boundsRect(for:contentRect:in:textContainer:characterRange:)](boundsrect%28for_contentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text table block actually occupies, including padding, borders, and margins.

# rectForBlock:layoutAtPoint:inRect:textContainer:characterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle within which glyphs should be laid out for a text table block.

## Declaration

```objectivec
- (NSRect) rectForBlock:(NSTextTableBlock *) block layoutAtPoint:(NSPoint) startingPoint inRect:(NSRect) rect textContainer:(NSTextContainer *) textContainer characterRange:(NSRange) charRange;
```

## Parameters

- `block`: The text table block that wants to determine where to layout its glyphs.
- `startingPoint`: The location, in container coordinates, where layout begins.
- `rect`: The rectangle in which the block is constrained to lie. For top-level blocks, this is the container rectangle of `textContainer`; for nested blocks, this is the layout rectangle of the enclosing block.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle within which glyphs should be laid out.

<a id="Discussion"></a>

## Discussion

This method is called by the text table block `block` to determine the rectangle within which glyphs should be laid out for the text table block.

## See Also

### Determining layout rectangles

- [boundsRectForBlock:contentRect:inRect:textContainer:characterRange:](boundsrect%28for_contentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text table block actually occupies, including padding, borders, and margins.
