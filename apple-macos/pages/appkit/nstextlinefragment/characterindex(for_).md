> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/characterindex(for:)](https://developer.apple.com/documentation/appkit/nstextlinefragment/characterindex(for:))

# characterIndex(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns character index for a point inside the line fragment coordinate system.

## Declaration

```swift
func characterIndex(for point: CGPoint) -> Int
```

## Parameters

- `point`: The distance is from the upstream edge.

<a id="return-value"></a>

## Return Value

An integer that represents the character index at `point`.

## See Also

### Finding specific text

- [fractionOfDistanceThroughGlyph(for:)](fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacter(at:)](locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.

# characterIndexForPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns character index for a point inside the line fragment coordinate system.

## Declaration

```objectivec
- (NSInteger) characterIndexForPoint:(CGPoint) point;
```

## Parameters

- `point`: The distance is from the upstream edge.

<a id="return-value"></a>

## Return Value

An integer that represents the character index at `point`.

## See Also

### Finding specific text

- [fractionOfDistanceThroughGlyphForPoint:](fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacterAtIndex:](locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.
