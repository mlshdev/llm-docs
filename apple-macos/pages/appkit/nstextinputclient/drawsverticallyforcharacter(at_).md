> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/drawsverticallyforcharacter(at:)](https://developer.apple.com/documentation/appkit/nstextinputclient/drawsverticallyforcharacter(at:))

# drawsVerticallyForCharacter(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.

## Declaration

```swift
optional func drawsVerticallyForCharacter(at charIndex: Int) -> Bool
```

## Parameters

- `charIndex`: The index of the character to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the character is rendered vertically; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting character coordinates

- [characterIndex(for:)](characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [firstRect(forCharacterRange:actualRange:)](firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [baselineDeltaForCharacter(at:)](baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRect(forCharacterRange:actualRange:)](firstrect%28forcharacterrange_actualrange_%29.md).
- [fractionOfDistanceThroughGlyph(for:)](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.

# drawsVerticallyForCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Informs the text input management system whether the protocol-conforming client renders the character at the given index vertically.

## Declaration

```objectivec
- (BOOL) drawsVerticallyForCharacterAtIndex:(NSUInteger) charIndex;
```

## Parameters

- `charIndex`: The index of the character to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the character is rendered vertically; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting character coordinates

- [characterIndexForPoint:](characterindex%28for_%29.md): Returns the index of the character whose bounding rectangle includes the given point.
- [firstRectForCharacterRange:actualRange:](firstrect%28forcharacterrange_actualrange_%29.md): Returns the first logical boundary rectangle for characters in the given range.
- [baselineDeltaForCharacterAtIndex:](baselinedeltaforcharacter%28at_%29.md): Returns the baseline position of a given character relative to the origin of rectangle returned by [firstRectForCharacterRange:actualRange:](firstrect%28forcharacterrange_actualrange_%29.md).
- [fractionOfDistanceThroughGlyphForPoint:](fractionofdistancethroughglyph%28for_%29.md): Returns the fraction of the distance from the left side of the character to the right side that a given point lies.
