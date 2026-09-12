> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungetstatus(_:)](https://developer.apple.com/documentation/coretext/ctrungetstatus(_:))

# CTRunGetStatus(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the run’s status.

## Declaration

```swift
func CTRunGetStatus(_ run: CTRun) -> CTRunStatus
```

## Parameters

- `run`: The run for which to return the status.

<a id="return-value"></a>

## Return Value

The run’s status.

<a id="Discussion"></a>

## Discussion

Runs have status that can be used to expedite certain operations. Knowing the direction and ordering of a run’s glyphs can aid in string index analysis, whereas knowing whether the positions reference the identity text matrix can avoid expensive comparisons. This status is provided as a convenience, because this information is not strictly necessary but can be helpful in some circumstances.

## See Also

### Getting Glyph Run Data

- [CTRunGetGlyphCount(\_:)](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetAttributes(\_:)](ctrungetattributes%28__%29.md): Returns the attribute dictionary that was used to create the glyph run.
- [CTRunGetGlyphsPtr(\_:)](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs(\_:\_:\_:)](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr(\_:)](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions(\_:\_:\_:)](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr(\_:)](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances(\_:\_:\_:)](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr(\_:)](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices(\_:\_:\_:)](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange(\_:)](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.

# CTRunGetStatus (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the run’s status.

## Declaration

```objectivec
extern CTRunStatus CTRunGetStatus(CTRunRef run);
```

## Parameters

- `run`: The run for which to return the status.

<a id="return-value"></a>

## Return Value

The run’s status.

<a id="Discussion"></a>

## Discussion

Runs have status that can be used to expedite certain operations. Knowing the direction and ordering of a run’s glyphs can aid in string index analysis, whereas knowing whether the positions reference the identity text matrix can avoid expensive comparisons. This status is provided as a convenience, because this information is not strictly necessary but can be helpful in some circumstances.

## See Also

### Getting Glyph Run Data

- [CTRunGetGlyphCount](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetAttributes](ctrungetattributes%28__%29.md): Returns the attribute dictionary that was used to create the glyph run.
- [CTRunGetGlyphsPtr](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.
