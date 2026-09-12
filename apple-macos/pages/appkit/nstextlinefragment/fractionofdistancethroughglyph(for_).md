> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment/fractionofdistancethroughglyph(for:)](https://developer.apple.com/documentation/appkit/nstextlinefragment/fractionofdistancethroughglyph(for:))

# fractionOfDistanceThroughGlyph(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns character index for a point inside the line fragment coordinate system.

## Declaration

```swift
func fractionOfDistanceThroughGlyph(for point: CGPoint) -> CGFloat
```

## Parameters

- `point`: A [CGPoint](https://developer.apple.com/documentation/corefoundation/cgpoint) that represents the point inside the line fragment.

<a id="return-value"></a>

## Return Value

The fraction of distance from the upstream edge.

## See Also

### Finding specific text

- [characterIndex(for:)](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacter(at:)](locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.

# fractionOfDistanceThroughGlyphForPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns character index for a point inside the line fragment coordinate system.

## Declaration

```objectivec
- (CGFloat) fractionOfDistanceThroughGlyphForPoint:(CGPoint) point;
```

## Parameters

- `point`: A [CGPoint](https://developer.apple.com/documentation/corefoundation/cgpoint) that represents the point inside the line fragment.

<a id="return-value"></a>

## Return Value

The fraction of distance from the upstream edge.

## See Also

### Finding specific text

- [characterIndexForPoint:](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacterAtIndex:](locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.
