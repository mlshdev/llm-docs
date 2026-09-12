> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegetstringrange(_:)](https://developer.apple.com/documentation/coretext/ctlinegetstringrange(_:))

# CTLineGetStringRange(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the range of characters that originally spawned the glyphs in the line.

## Declaration

```swift
func CTLineGetStringRange(_ line: CTLine) -> CFRange
```

## Parameters

- `line`: The line from which to obtain the string range.

<a id="return-value"></a>

## Return Value

A [CFRange](../corefoundation/cfrange.md) structure that contains the range over the backing store string that spawned the glyphs, or if the function fails for any reason, an empty range.

## See Also

### Getting Line Data

- [CTLineGetGlyphCount(\_:)](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetGlyphRuns(\_:)](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetPenOffsetForFlush(\_:\_:\_:)](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.

# CTLineGetStringRange (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the range of characters that originally spawned the glyphs in the line.

## Declaration

```objectivec
extern CFRange CTLineGetStringRange(CTLineRef line);
```

## Parameters

- `line`: The line from which to obtain the string range.

<a id="return-value"></a>

## Return Value

A [CFRange](../corefoundation/cfrange.md) structure that contains the range over the backing store string that spawned the glyphs, or if the function fails for any reason, an empty range.

## See Also

### Getting Line Data

- [CTLineGetGlyphCount](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetGlyphRuns](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetPenOffsetForFlush](ctlinegetpenoffsetforflush%28______%29.md): Gets the pen offset required to draw flush text.
