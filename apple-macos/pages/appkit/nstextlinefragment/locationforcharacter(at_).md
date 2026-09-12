> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/locationforcharacter(at:)](https://developer.apple.com/documentation/appkit/nstextlinefragment/locationforcharacter(at:))

# locationForCharacter(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the location of the character at the specified index.

## Declaration

```swift
func locationForCharacter(at index: Int) -> CGPoint
```

## Parameters

- `index`: An integer that represents the position in the text.

<a id="return-value"></a>

## Return Value

A [CGPoint](https://developer.apple.com/documentation/corefoundation/cgpoint) that’s on the upstream edge of the glyph. It’s in the coordinate system relative to the line fragment origin.

## See Also

### Finding specific text

- [characterIndex(for:)](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [fractionOfDistanceThroughGlyph(for:)](fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.

# locationForCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the location of the character at the specified index.

## Declaration

```objectivec
- (CGPoint) locationForCharacterAtIndex:(NSInteger) index;
```

## Parameters

- `index`: An integer that represents the position in the text.

<a id="return-value"></a>

## Return Value

A [CGPoint](https://developer.apple.com/documentation/corefoundation/cgpoint) that’s on the upstream edge of the glyph. It’s in the coordinate system relative to the line fragment origin.

## See Also

### Finding specific text

- [characterIndexForPoint:](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [fractionOfDistanceThroughGlyphForPoint:](fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
