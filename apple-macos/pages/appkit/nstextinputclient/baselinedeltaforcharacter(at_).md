> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/baselinedeltaforcharacter(at:)](https://developer.apple.com/documentation/appkit/nstextinputclient/baselinedeltaforcharacter(at:))

# baselineDeltaForCharacter(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRect(forCharacterRange:actualRange:)](firstrect%28forcharacterrange_actualrange_%29.md).

## Declaration

```swift
optional func baselineDeltaForCharacter(at anIndex: Int) -> CGFloat
```

## Parameters

- `anIndex`: Index of the character whose baseline is tested.

<a id="return-value"></a>

## Return Value

The vertical distance, in points, between the baseline of the character at `anIndex` and the rectangle origin.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. This information allows the caller to determine finer-grained character positioning within the text storage of the text view adopting `NSTextInputClient`.

## See Also

### Getting character coordinates

- [characterIndex(for:)](characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [firstRect(forCharacterRange:actualRange:)](firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [drawsVerticallyForCharacter(at:)](drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyph(for:)](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.

# baselineDeltaForCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRectForCharacterRange:actualRange:](firstrect%28forcharacterrange_actualrange_%29.md).

## Declaration

```objectivec
- (CGFloat) baselineDeltaForCharacterAtIndex:(NSUInteger) anIndex;
```

## Parameters

- `anIndex`: Index of the character whose baseline is tested.

<a id="return-value"></a>

## Return Value

The vertical distance, in points, between the baseline of the character at `anIndex` and the rectangle origin.

<a id="Discussion"></a>

## Discussion

Implementation of this method is optional. This information allows the caller to determine finer-grained character positioning within the text storage of the text view adopting `NSTextInputClient`.

## See Also

### Getting character coordinates

- [characterIndexForPoint:](characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [firstRectForCharacterRange:actualRange:](firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [drawsVerticallyForCharacterAtIndex:](drawsverticallyforcharacter%28at_%29.md): Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.
- [fractionOfDistanceThroughGlyphForPoint:](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.
