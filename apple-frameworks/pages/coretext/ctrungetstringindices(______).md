> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungetstringindices(_:_:_:)](https://developer.apple.com/documentation/coretext/ctrungetstringindices(_:_:_:))

# CTRunGetStringIndices(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of string indices into a user-provided buffer.

## Declaration

```swift
func CTRunGetStringIndices(_ run: CTRun, _ range: CFRange, _ buffer: UnsafeMutablePointer<CFIndex>)
```

## Parameters

- `run`: The run from which to copy the string indices.
- `range`: The range of string indices to copy. If the length of the range is set to `0`, then the copy operation continues from the range’s start index to the end of the run.
- `buffer`: The buffer to which the string indices are copied. The buffer must be allocated to at least the value specified by the range’s length.

<a id="Discussion"></a>

## Discussion

The indices are the character indices that originally spawned the glyphs that make up the run. They can be used to map the glyphs in the run back to the characters in the backing store.

## See Also

### Getting Glyph Run Data

- [CTRunGetGlyphCount(\_:)](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetAttributes(\_:)](ctrungetattributes%28__%29.md): Returns the attribute dictionary that was used to create the glyph run.
- [CTRunGetStatus(\_:)](ctrungetstatus%28__%29.md): Returns the run’s status.
- [CTRunGetGlyphsPtr(\_:)](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs(\_:\_:\_:)](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr(\_:)](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions(\_:\_:\_:)](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr(\_:)](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances(\_:\_:\_:)](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr(\_:)](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringRange(\_:)](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.

# CTRunGetStringIndices (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of string indices into a user-provided buffer.

## Declaration

```objectivec
extern void CTRunGetStringIndices(CTRunRef run, CFRange range, CFIndex buffer[]);
```

## Parameters

- `run`: The run from which to copy the string indices.
- `range`: The range of string indices to copy. If the length of the range is set to `0`, then the copy operation continues from the range’s start index to the end of the run.
- `buffer`: The buffer to which the string indices are copied. The buffer must be allocated to at least the value specified by the range’s length.

<a id="Discussion"></a>

## Discussion

The indices are the character indices that originally spawned the glyphs that make up the run. They can be used to map the glyphs in the run back to the characters in the backing store.

## See Also

### Getting Glyph Run Data

- [CTRunGetGlyphCount](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetAttributes](ctrungetattributes%28__%29.md): Returns the attribute dictionary that was used to create the glyph run.
- [CTRunGetStatus](ctrungetstatus%28__%29.md): Returns the run’s status.
- [CTRunGetGlyphsPtr](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringRange](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.
