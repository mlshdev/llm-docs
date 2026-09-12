> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/characterindex(for:)](https://developer.apple.com/documentation/appkit/nstextinputclient/characterindex(for:))

# characterIndex(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the character whose bounding rectangle includes the given point.

## Declaration

```swift
func characterIndex(for point: NSPoint) -> Int
```

## Parameters

- `point`: The point to test, in screen coordinates.

<a id="return-value"></a>

## Return Value

The character index, measured from the start of the receiver’s text storage, of the character containing the given point. Returns `NSNotFound` if the cursor is not within a character’s bounding rectangle.

## See Also

### Getting character coordinates

- [firstRect(forCharacterRange:actualRange:)](firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [baselineDeltaForCharacter(at:)](baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRect(forCharacterRange:actualRange:)](firstrect%28forcharacterrange_actualrange_%29.md).
- [drawsVerticallyForCharacter(at:)](drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyph(for:)](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.

# characterIndexForPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the character whose bounding rectangle includes the given point.

## Declaration

```objectivec
- (NSUInteger) characterIndexForPoint:(NSPoint) point;
```

## Parameters

- `point`: The point to test, in screen coordinates.

<a id="return-value"></a>

## Return Value

The character index, measured from the start of the receiver’s text storage, of the character containing the given point. Returns `NSNotFound` if the cursor is not within a character’s bounding rectangle.

## See Also

### Getting character coordinates

- [firstRectForCharacterRange:actualRange:](firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [baselineDeltaForCharacterAtIndex:](baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRectForCharacterRange:actualRange:](firstrect%28forcharacterrange_actualrange_%29.md).
- [drawsVerticallyForCharacterAtIndex:](drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyphForPoint:](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.
