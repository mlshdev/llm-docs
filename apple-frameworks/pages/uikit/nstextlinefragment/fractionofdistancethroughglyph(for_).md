> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlinefragment/fractionofdistancethroughglyph(for:)](https://developer.apple.com/documentation/uikit/nstextlinefragment/fractionofdistancethroughglyph(for:))

# fractionOfDistanceThroughGlyph(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns character index for a point inside the line fragment coordinate system.

## Declaration

```swift
func fractionOfDistanceThroughGlyph(for point: CGPoint) -> CGFloat
```

## Parameters

- `point`: A [CGPoint](../../corefoundation/cgpoint.md) that represents the point inside the line fragment.

<a id="return-value"></a>

## Return Value

The fraction of distance from the upstream edge.

## See Also

### Finding specific text

- [characterIndex(for:)](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacter(at:)](locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.

# fractionOfDistanceThroughGlyphForPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns character index for a point inside the line fragment coordinate system.

## Declaration

```objectivec
- (CGFloat) fractionOfDistanceThroughGlyphForPoint:(CGPoint) point;
```

## Parameters

- `point`: A [CGPoint](../../corefoundation/cgpoint.md) that represents the point inside the line fragment.

<a id="return-value"></a>

## Return Value

The fraction of distance from the upstream edge.

## See Also

### Finding specific text

- [characterIndexForPoint:](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacterAtIndex:](locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.
