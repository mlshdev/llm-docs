> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegetglyphcount(_:)](https://developer.apple.com/documentation/coretext/ctlinegetglyphcount(_:))

# CTLineGetGlyphCount(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the total glyph count for the line object.

## Declaration

```swift
func CTLineGetGlyphCount(_ line: CTLine) -> CFIndex
```

## Parameters

- `line`: The line whose glyph count is returned.

<a id="return-value"></a>

## Return Value

The total glyph count for the line passed in.

<a id="Discussion"></a>

## Discussion

The total glyph count is equal to the sum of all of the glyphs in the glyph runs forming the line.

## See Also

### Getting Line Data

- [CTLineGetGlyphRuns(\_:)](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetStringRange(\_:)](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.
- [CTLineGetPenOffsetForFlush(\_:\_:\_:)](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.

# CTLineGetGlyphCount (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the total glyph count for the line object.

## Declaration

```objectivec
extern CFIndex CTLineGetGlyphCount(CTLineRef line);
```

## Parameters

- `line`: The line whose glyph count is returned.

<a id="return-value"></a>

## Return Value

The total glyph count for the line passed in.

<a id="Discussion"></a>

## Discussion

The total glyph count is equal to the sum of all of the glyphs in the glyph runs forming the line.

## See Also

### Getting Line Data

- [CTLineGetGlyphRuns](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetStringRange](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.
- [CTLineGetPenOffsetForFlush](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.
