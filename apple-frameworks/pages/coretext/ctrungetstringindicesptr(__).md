> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungetstringindicesptr(_:)](https://developer.apple.com/documentation/coretext/ctrungetstringindicesptr(_:))

# CTRunGetStringIndicesPtr(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a direct pointer for the string indices stored in the run.

## Declaration

```swift
func CTRunGetStringIndicesPtr(_ run: CTRun) -> UnsafePointer<CFIndex>?
```

## Parameters

- `run`: The run for which to return string indices.

<a id="return-value"></a>

## Return Value

A valid pointer to an array of [CFIndex](../corefoundation/cfindex.md) structures, or `NULL`.

<a id="Discussion"></a>

## Discussion

The indices are the character indices that originally spawned the glyphs that make up the run. They can be used to map the glyphs in the run back to the characters in the backing store. The string indices array will have a length equal to the value returned by [CTRunGetGlyphCount(\_:)](ctrungetglyphcount%28__%29.md). The caller should be prepared for this function to return `NULL` even if there are glyphs in the stream. If this function returns `NULL`, the caller must allocate its own buffer and call [CTRunGetStringIndices(\_:\_:\_:)](ctrungetstringindices%28______%29.md) to fetch the indices.

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
- [CTRunGetStringIndices(\_:\_:\_:)](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange(\_:)](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.

# CTRunGetStringIndicesPtr (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a direct pointer for the string indices stored in the run.

## Declaration

```objectivec
extern const CFIndex *CTRunGetStringIndicesPtr(CTRunRef run);
```

## Parameters

- `run`: The run for which to return string indices.

<a id="return-value"></a>

## Return Value

A valid pointer to an array of [CFIndex](../corefoundation/cfindex.md) structures, or `NULL`.

<a id="Discussion"></a>

## Discussion

The indices are the character indices that originally spawned the glyphs that make up the run. They can be used to map the glyphs in the run back to the characters in the backing store. The string indices array will have a length equal to the value returned by [CTRunGetGlyphCount](ctrungetglyphcount%28__%29.md). The caller should be prepared for this function to return `NULL` even if there are glyphs in the stream. If this function returns `NULL`, the caller must allocate its own buffer and call [CTRunGetStringIndices](ctrungetstringindices%28______%29.md) to fetch the indices.

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
- [CTRunGetStringIndices](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.
