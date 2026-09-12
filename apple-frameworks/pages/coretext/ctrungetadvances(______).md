> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungetadvances(_:_:_:)](https://developer.apple.com/documentation/coretext/ctrungetadvances(_:_:_:))

# CTRunGetAdvances(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of glyph advances into a user-provided buffer.

## Declaration

```swift
func CTRunGetAdvances(_ run: CTRun, _ range: CFRange, _ buffer: UnsafeMutablePointer<CGSize>)
```

## Parameters

- `run`: The run whose advances you wish to copy.
- `range`: The range of glyph advances you wish to copy. If the length of the range is set to `0`, then the copy operation continues from the range’s start index to the end of the run.
- `buffer`: The buffer to which the glyph advances are copied. The buffer must be allocated to at least the value specified by the range’s length.

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
- [CTRunGetStringIndicesPtr(\_:)](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices(\_:\_:\_:)](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange(\_:)](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.

# CTRunGetAdvances (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of glyph advances into a user-provided buffer.

## Declaration

```objectivec
extern void CTRunGetAdvances(CTRunRef run, CFRange range, CGSize buffer[]);
```

## Parameters

- `run`: The run whose advances you wish to copy.
- `range`: The range of glyph advances you wish to copy. If the length of the range is set to `0`, then the copy operation continues from the range’s start index to the end of the run.
- `buffer`: The buffer to which the glyph advances are copied. The buffer must be allocated to at least the value specified by the range’s length.

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
- [CTRunGetStringIndicesPtr](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.
