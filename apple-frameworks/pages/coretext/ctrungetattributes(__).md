> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungetattributes(_:)](https://developer.apple.com/documentation/coretext/ctrungetattributes(_:))

# CTRunGetAttributes(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attribute dictionary that was used to create the glyph run.

## Declaration

```swift
func CTRunGetAttributes(_ run: CTRun) -> CFDictionary
```

## Parameters

- `run`: The run for which to return attributes.

<a id="return-value"></a>

## Return Value

A valid [CFDictionary](../corefoundation/cfdictionary.md) or `NULL` on error or if the run has no attributes.

<a id="Discussion"></a>

## Discussion

The dictionary returned is either the same one that was set as an attribute dictionary on the original attributed string or a dictionary that has been manufactured by the layout engine. Attribute dictionaries can be manufactured in the case of font substitution or if the run is missing critical attributes.

## See Also

### Getting Glyph Run Data

- [CTRunGetGlyphCount(\_:)](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetStatus(\_:)](ctrungetstatus%28__%29.md): Returns the run’s status.
- [CTRunGetGlyphsPtr(\_:)](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs(\_:\_:\_:)](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr(\_:)](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions(\_:\_:\_:)](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr(\_:)](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances(\_:\_:\_:)](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr(\_:)](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices(\_:\_:\_:)](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange(\_:)](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.

# CTRunGetAttributes (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the attribute dictionary that was used to create the glyph run.

## Declaration

```objectivec
extern CFDictionaryRefCTRunGetAttributes(CTRunRef run);
```

## Parameters

- `run`: The run for which to return attributes.

<a id="return-value"></a>

## Return Value

A valid [CFDictionaryRef](../corefoundation/cfdictionary.md) or `NULL` on error or if the run has no attributes.

<a id="Discussion"></a>

## Discussion

The dictionary returned is either the same one that was set as an attribute dictionary on the original attributed string or a dictionary that has been manufactured by the layout engine. Attribute dictionaries can be manufactured in the case of font substitution or if the run is missing critical attributes.

## See Also

### Getting Glyph Run Data

- [CTRunGetGlyphCount](ctrungetglyphcount%28__%29.md): Gets the glyph count for the run.
- [CTRunGetStatus](ctrungetstatus%28__%29.md): Returns the run’s status.
- [CTRunGetGlyphsPtr](ctrungetglyphsptr%28__%29.md): Returns a direct pointer for the glyph array stored in the run.
- [CTRunGetGlyphs](ctrungetglyphs%28______%29.md): Copies a range of glyphs into a user-provided buffer.
- [CTRunGetPositionsPtr](ctrungetpositionsptr%28__%29.md): Returns a direct pointer for the glyph position array stored in the run.
- [CTRunGetPositions](ctrungetpositions%28______%29.md): Copies a range of glyph positions into a user-provided buffer.
- [CTRunGetAdvancesPtr](ctrungetadvancesptr%28__%29.md): Returns a direct pointer for the glyph advance array stored in the run.
- [CTRunGetAdvances](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.
- [CTRunGetStringIndicesPtr](ctrungetstringindicesptr%28__%29.md): Returns a direct pointer for the string indices stored in the run.
- [CTRunGetStringIndices](ctrungetstringindices%28______%29.md): Copies a range of string indices into a user-provided buffer.
- [CTRunGetStringRange](ctrungetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the run.
