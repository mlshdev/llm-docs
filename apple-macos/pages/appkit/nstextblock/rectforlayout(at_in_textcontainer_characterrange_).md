> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextblock/rectforlayout(at:in:textcontainer:characterrange:)](https://developer.apple.com/documentation/appkit/nstextblock/rectforlayout(at:in:textcontainer:characterrange:))

# rectForLayout(at:in:textContainer:characterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle within which glyphs should be laid out for the specified arguments.

## Declaration

```swift
func rectForLayout(at startingPoint: NSPoint, in rect: NSRect, textContainer: NSTextContainer, characterRange charRange: NSRange) -> NSRect
```

## Parameters

- `startingPoint`: The location, in container coordinates, where layout begins.
- `rect`: The rectangle in which the block is constrained to lie. For top-level blocks, this is the container rectangle of `textContainer`; for nested blocks, this is the layout rectangle of the enclosing block.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters in the [NSTextStorage](../nstextstorage.md) object whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle within which glyphs should be laid out.

<a id="Discussion"></a>

## Discussion

This method is called by the typesetter before the text block is laid out to return the rectangle within which glyphs should be laid out.

## See Also

### Determining size and position of a text block

- [boundsRect(forContentRect:in:textContainer:characterRange:)](boundsrect%28forcontentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text in the block actually occupies, including padding, borders, and margins.

# rectForLayoutAtPoint:inRect:textContainer:characterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the rectangle within which glyphs should be laid out for the specified arguments.

## Declaration

```objectivec
- (NSRect) rectForLayoutAtPoint:(NSPoint) startingPoint inRect:(NSRect) rect textContainer:(NSTextContainer *) textContainer characterRange:(NSRange) charRange;
```

## Parameters

- `startingPoint`: The location, in container coordinates, where layout begins.
- `rect`: The rectangle in which the block is constrained to lie. For top-level blocks, this is the container rectangle of `textContainer`; for nested blocks, this is the layout rectangle of the enclosing block.
- `textContainer`: The text container being used for the layout.
- `charRange`: The range of the characters in the [NSTextStorage](../nstextstorage.md) object whose glyphs are to be drawn.

<a id="return-value"></a>

## Return Value

The rectangle within which glyphs should be laid out.

<a id="Discussion"></a>

## Discussion

This method is called by the typesetter before the text block is laid out to return the rectangle within which glyphs should be laid out.

## See Also

### Determining size and position of a text block

- [boundsRectForContentRect:inRect:textContainer:characterRange:](boundsrect%28forcontentrect_in_textcontainer_characterrange_%29.md): Returns the rectangle the text in the block actually occupies, including padding, borders, and margins.
