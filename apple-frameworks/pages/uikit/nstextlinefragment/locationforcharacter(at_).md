> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlinefragment/locationforcharacter(at:)](https://developer.apple.com/documentation/uikit/nstextlinefragment/locationforcharacter(at:))

# locationForCharacter(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the location of the character at the specified index.

## Declaration

```swift
func locationForCharacter(at index: Int) -> CGPoint
```

## Parameters

- `index`: An integer that represents the position in the text.

<a id="return-value"></a>

## Return Value

A [CGPoint](../../corefoundation/cgpoint.md) that’s on the upstream edge of the glyph. It’s in the coordinate system relative to the line fragment origin.

## See Also

### Finding specific text

- [characterIndex(for:)](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [fractionOfDistanceThroughGlyph(for:)](fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.

# locationForCharacterAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the location of the character at the specified index.

## Declaration

```objectivec
- (CGPoint) locationForCharacterAtIndex:(NSInteger) index;
```

## Parameters

- `index`: An integer that represents the position in the text.

<a id="return-value"></a>

## Return Value

A [CGPoint](../../corefoundation/cgpoint.md) that’s on the upstream edge of the glyph. It’s in the coordinate system relative to the line fragment origin.

## See Also

### Finding specific text

- [characterIndexForPoint:](characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [fractionOfDistanceThroughGlyphForPoint:](fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
