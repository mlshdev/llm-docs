> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/firstrect(forcharacterrange:actualrange:)](https://developer.apple.com/documentation/appkit/nstextinputclient/firstrect(forcharacterrange:actualrange:))

# firstRect(forCharacterRange:actualRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first logical boundary rectangle for characters in the given range.

## Declaration

```swift
func firstRect(forCharacterRange range: NSRange, actualRange: NSRangePointer?) -> NSRect
```

## Parameters

- `range`: The character range whose boundary rectangle is returned.
- `actualRange`: If non-`NULL`, contains the character range corresponding to the returned area if it was adjusted, for example, to a grapheme cluster boundary or characters in the first line fragment.

<a id="return-value"></a>

## Return Value

The boundary rectangle for the given range of characters, in screen coordinates. The rectangle’s  `size` value can be negative if the text flows to the left.

<a id="Discussion"></a>

## Discussion

If `aRange` spans multiple lines of text in the text view, the rectangle returned is the one surrounding the characters in the first line. In that case `actualRange` contains the range covered by the first rect, so you can query all line fragments by invoking this method repeatedly. If the length of `aRange` is 0 (as it would be if there is nothing selected at the insertion point), the rectangle coincides with the insertion point, and its width is 0.

## See Also

### Getting character coordinates

- [characterIndex(for:)](characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [baselineDeltaForCharacter(at:)](baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRect(forCharacterRange:actualRange:)](firstrect%28forcharacterrange_actualrange_%29.md).
- [drawsVerticallyForCharacter(at:)](drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyph(for:)](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.

# firstRectForCharacterRange:actualRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the first logical boundary rectangle for characters in the given range.

## Declaration

```objectivec
- (NSRect) firstRectForCharacterRange:(NSRange) range actualRange:(NSRangePointer) actualRange;
```

## Parameters

- `range`: The character range whose boundary rectangle is returned.
- `actualRange`: If non-`NULL`, contains the character range corresponding to the returned area if it was adjusted, for example, to a grapheme cluster boundary or characters in the first line fragment.

<a id="return-value"></a>

## Return Value

The boundary rectangle for the given range of characters, in screen coordinates. The rectangle’s  `size` value can be negative if the text flows to the left.

<a id="Discussion"></a>

## Discussion

If `aRange` spans multiple lines of text in the text view, the rectangle returned is the one surrounding the characters in the first line. In that case `actualRange` contains the range covered by the first rect, so you can query all line fragments by invoking this method repeatedly. If the length of `aRange` is 0 (as it would be if there is nothing selected at the insertion point), the rectangle coincides with the insertion point, and its width is 0.

## See Also

### Getting character coordinates

- [characterIndexForPoint:](characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [baselineDeltaForCharacterAtIndex:](baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRectForCharacterRange:actualRange:](firstrect%28forcharacterrange_actualrange_%29.md).
- [drawsVerticallyForCharacterAtIndex:](drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyphForPoint:](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.
