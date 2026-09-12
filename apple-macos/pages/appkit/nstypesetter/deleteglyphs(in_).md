> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/deleteglyphs(in:)](https://developer.apple.com/documentation/appkit/nstypesetter/deleteglyphs(in:))

# deleteGlyphs(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Deletes the specified glyphs from the glyph cache maintained by the layout manager.

## Declaration

```swift
func deleteGlyphs(in glyphRange: NSRange)
```

## Parameters

- `glyphRange`: The range of glyphs to be deleted.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [actionForControlCharacter(at:)](actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [substituteGlyphs(in:withGlyphs:)](substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacter(at:)](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

# deleteGlyphsInRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Deletes the specified glyphs from the glyph cache maintained by the layout manager.

## Declaration

```objectivec
- (void) deleteGlyphsInRange:(NSRange) glyphRange;
```

## Parameters

- `glyphRange`: The range of glyphs to be deleted.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Deprecated

- [actionForControlCharacterAtIndex:](actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [substituteGlyphsInRange:withGlyphs:](substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph:atGlyphIndex:characterIndex:](insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](../nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacterAtIndex:](actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.
