> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegetglyphruns(_:)](https://developer.apple.com/documentation/coretext/ctlinegetglyphruns(_:))

# CTLineGetGlyphRuns(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the array of glyph runs that make up the line object.

## Declaration

```swift
func CTLineGetGlyphRuns(_ line: CTLine) -> CFArray
```

## Parameters

- `line`: The line whose glyph run array is returned.

<a id="return-value"></a>

## Return Value

A [CFArray](../corefoundation/cfarray.md) containing the CTRun objects that make up the line.

## See Also

### Getting Line Data

- [CTLineGetGlyphCount(\_:)](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetStringRange(\_:)](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.
- [CTLineGetPenOffsetForFlush(\_:\_:\_:)](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.

# CTLineGetGlyphRuns (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the array of glyph runs that make up the line object.

## Declaration

```objectivec
extern CFArrayRefCTLineGetGlyphRuns(CTLineRef line);
```

## Parameters

- `line`: The line whose glyph run array is returned.

<a id="return-value"></a>

## Return Value

A [CFArrayRef](../corefoundation/cfarray.md) containing the CTRun objects that make up the line.

## See Also

### Getting Line Data

- [CTLineGetGlyphCount](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetStringRange](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.
- [CTLineGetPenOffsetForFlush](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.
